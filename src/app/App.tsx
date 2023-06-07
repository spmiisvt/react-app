import React from 'react';
import './styles/index.scss'
import {RouterView} from "app/providers/router";

const App = () => {
    return (
        <div>
            Hello
            <RouterView />
        </div>
    );
};

export default App;