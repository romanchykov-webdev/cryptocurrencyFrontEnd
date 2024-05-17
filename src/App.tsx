import React from 'react';
import Home from './components/home';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponents from './components/auth';

//import theme mode
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LayoutComponent from "./components/layout";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                    <div className="App">
                        <Routes>
                            {/*solo registration user*/}
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<Home/>}/>
                            </Route>
                            {/*all users open routing*/}
                            <Route path="login" element={<AuthRootComponents/>}/>
                            <Route path="register" element={<AuthRootComponents/>}/>
                        </Routes>
                    </div>
                </LayoutComponent>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
