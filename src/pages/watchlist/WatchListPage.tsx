import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getWatchlistElements} from "../../store/thunks/watchList";
import {getTopPriceData} from "../../store/thunks/assets";
import AssetsTableComponent from "../../components/assetsTable/assetsTableComponent";
import {Grid, Typography} from "@mui/material";
import {useStyles} from "./style";

const WatchListPage = () => {
const classes=useStyles()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchlistElements())
    }, [dispatch]);

    const watchlist = useAppSelector(state => state.watchlist.assets)
    const {assets} = useAppSelector(state => state.assets)
    // console.log('assets',assets)
    // console.log('watchlist',watchlist)

    //filter asset
    const filteredArray=assets.filter((element:any) => {
        return watchlist.some((otherElement:any) => {
            return otherElement.assetId === element.id
        })
    })
    // console.log('filteredArray',filteredArray)
    //filter asset end


    return (
    <Grid className={classes.root}>
        <Grid className={classes.watchlistHeading}>
            <Typography variant='h2' className={classes.heading}>
                Избранное
            </Typography>
        </Grid>
        <Grid className={classes.assetsTableBlock}>
            <AssetsTableComponent assets={filteredArray} />
        </Grid>
    </Grid>


    );
};

export default WatchListPage;