import {useEffect, useState} from "react";
import {useAppDispatch} from "../store/hooks";
import {chooseHouseItem, setResult} from "../store/game/game.slice";

export function useGetResult() {
    const [showResult, setShowResult] = useState(false)
    const [getResult, setGetResult] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        let timer: undefined | ReturnType<typeof setTimeout> = undefined
        if (getResult) {
            timer = setTimeout(() => {
                setShowResult(true)
            }, 650)
        }
        return () => {
            clearTimeout(timer)
            setShowResult(false)
        }
    }, [dispatch, getResult])
    useEffect(() => {
        let timer: undefined | ReturnType<typeof setTimeout> = undefined
        if (showResult) {
            timer = setTimeout(() => {
                dispatch(chooseHouseItem())
                timer = setTimeout(() => {
                    dispatch(setResult())
                }, 100)
            }, 1400)
        }
        return () => {
            clearTimeout(timer)
        }
    }, [showResult, dispatch])
    return {getResult: setGetResult, showResult}
}
