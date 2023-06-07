import {render} from "react-dom";
import App from "./App";
import './styles/index.scss'
import ThemeProvider from "./theme/ThemeProvider";



render(

        <ThemeProvider>
            <App/>
        </ThemeProvider>
   ,
document.getElementById('root')
)