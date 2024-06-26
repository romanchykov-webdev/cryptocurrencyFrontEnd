import React from 'react';
import Home from './pages/home';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponents from './pages/auth';

//import theme mode
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import WatchListPage from "./pages/watchlist/WatchListPage";
import NewsPage from "./pages/news/NewsPage";
import SettingsPage from "./pages/settings/SettingsPage";
import LayoutComponent from "./components/layout";
import SingleAssetPage from "./pages/single-asset/SingleAssetPage";

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
                                <Route path="/watchlist" element={<WatchListPage/>}/>
                                <Route path="/news" element={<NewsPage/>}/>
                                <Route path="/settings" element={<SettingsPage/>}/>
                                <Route path={"/single/:id"} element={<SingleAssetPage/>} />
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
