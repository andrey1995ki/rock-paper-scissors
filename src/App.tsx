import React from 'react';
import {LayoutComponent} from "./app/components/LayoutComponent/LayoutComponent";
import {Provider} from "react-redux";
import {store} from "./app/store/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <LayoutComponent/>
            </div>
        </Provider>
    );
}

export default App;
