import React from 'react';
import Home from './pages/home';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponents from './pages/auth';

//import theme mode
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import WatchListComponent from "./pages/watchlist/WatchListComponent";
import NewsComponent from "./pages/news/NewsComponent";
import SettingsComponent from "./pages/settings/SettingsComponent";
import LayoutComponent from "./components/layout";

function App() {
    const [theme, colorMode] = useMode()


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Routes>
                        <Route element={<LayoutComponent/>}>
                            {/*solo registration user*/}
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/watchlist" element={<WatchListComponent/>}/>
                                <Route path="/news" element={<NewsComponent/>}/>
                                <Route path="/settings" element={<SettingsComponent/>}/>
                            </Route>
                            {/*all users open routing*/}
                            <Route path="/login" element={<AuthRootComponents/>}/>
                            <Route path="/register" element={<AuthRootComponents/>}/>
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
