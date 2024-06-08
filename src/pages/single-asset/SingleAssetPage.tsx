import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {ISingleAsset} from "../../common/types/assets";
import {AlertColor, Avatar, Button, Grid, Snackbar, Typography} from "@mui/material";
import FlexBetween from "../../components/flex-between/FlexBetween";
import {useNavigate, useParams} from "react-router-dom";
import {useStyles} from "./style";
import {createWatchListRecord} from "../../store/thunks/assets";
import {Alert} from "@mui/lab";
import {set} from "react-hook-form";

const SingleAssetPage: FC = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor>('success')

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const classes = useStyles()
    const {id} = useParams()
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )
    console.log(id)
    const asset = assetsArray.find((item) => item.name === (id as string));
    console.log(asset)

    // add tu watchList favorite
    const handleCreateRecord = () => {
        try {
            console.log(asset)
            if (asset) {
                const data = {
                    name: asset.name,
                    assetId: asset.id
                }
                dispatch(createWatchListRecord(data))
            }
            setSeverity('success')
            setOpen(true)
            setTimeout(()=>{
                setOpen(false)
            },2000)
        } catch (error: any) {
            setSeverity('error')
            setOpen(true)
            setTimeout(()=>{
                setOpen(false)
            },2000)
        }
    }

    return (
        <>
            {asset && (
                <Grid container className={classes.root}>

                    <Grid xs={12} className={classes.assetName}>
                        <Typography variant='h1'>{asset.name}</Typography>
                    </Grid>

                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Avatar alt={asset.name} src={asset.image} className={classes.assetIcon}/>
                                <Typography variant='h2'
                                            className={classes.assetSymbol}
                                >{asset.symbol.toUpperCase()}</Typography>
                            </FlexBetween>
                        </Grid>


                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>

                            <FlexBetween>
                                <Typography variant='h2'
                                            className={classes.cardTitle}>Цена: </Typography>
                                <Typography variant='h2' className={classes.assetPrice}>
                                    $ {asset.current_price}
                                </Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>

                    <Grid item
                          sm={6}
                          xs={12}
                          className={classes.card}
                    >
                        <Grid container className={classes.cardItem}>
                            <Typography variant='h2' className={classes.cardTitle}>
                                Изменение цены:&nbsp;
                            </Typography>
                            <Typography variant='h2' className={
                                asset.price_change_24h >= 0
                                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                            }>
                                $ {asset.price_change_24h.toFixed(4)}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/*///*/}
                    <Grid item
                          sm={6}
                          xs={12}
                          className={classes.card}
                    >
                        <Grid container className={classes.cardItem}>
                            <Typography variant='h2' className={classes.cardTitle}>
                                Изменение цены %:&nbsp;
                            </Typography>
                            <Typography variant='h2' className={
                                asset.price_change_percentage_24h >= 0
                                    ? `${classes.assetPriceDetail} ${classes.trendUp}`
                                    : `${classes.assetPriceDetail} ${classes.trendDown}`
                            }>
                                $ {asset.price_change_percentage_24h.toFixed(4)}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/*button back and to favorite*/}
                    <Grid container
                          justifyContent='center'
                          className={classes.cardButtonBlock}
                    >
                        <Button
                            color='success'
                            variant='outlined'
                            className={classes.cardButton}
                            onClick={() => navigate(-1)}
                        >Назад</Button>
                        <Button
                            color='success'
                            variant='outlined'
                            className={classes.cardButton}
                            onClick={handleCreateRecord}
                        >Добавить в избранное</Button>

                    </Grid>
                    <Snackbar open={open} autoHideDuration={6000}>
                        <Alert
                            severity={severity}
                            sx={{width: '100%'}}
                        >
                            Добавлено в избранные!
                        </Alert>
                    </Snackbar>

                </Grid>
            )}
        </>
    );
};

export default SingleAssetPage;