// rsc
import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets, getTopPriceData} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./style";
import AreaChart from "../../components/charts/areaChart/AreaChart";

//import icons
import TrendUp from '../../assets/images/chart/trend-up.svg'
import TrendDown from '../../assets/images/chart/trend-down.svg'
import LineChart from "../../components/charts/lineChart/LineChart";
import {IChartData, ISingleAsset} from "../../common/types/assets";
import TopPrice from "../../components/top-price/TopPrice";
// import {getPublicUser} from "../../store/thunks/auth";
//import icons end

const Home: FC = () => {

// Извлекает состояние favoriteAssets из хранилища Redux с помощью хука useAppSelector
    const favoriteAssets: IChartData[] = useAppSelector((state) => state.assets.favoriteAssets);
    // console.log(favoriteAssets)
// Выводит в консоль текущее значение favoriteAssets для отладки
//     console.log('favoriteAssets', favoriteAssets);
    //get topPrice array
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets
    )
    // console.log('assetsArray', assetsArray);


// Получает функцию dispatch из Redux с помощью хука useAppDispatch
    const dispatch = useAppDispatch();

// Инициализирует массив favoriteAssetName с помощью useMemo для предотвращения его пересоздания на каждом рендере
    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
    // const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum','tether','toncoin'], []);
    // const filteredArray=favoriteAssets.filter((value,index,self)=>index===self.findIndex((t)=>t.name===value.name))

// Создает ref объект, который сохраняет своё значение между рендерами, для отслеживания, были ли данные уже загружены
    const fetchDataRef = useRef(false);

// Определяет функцию fetchData с помощью useCallback, чтобы она сохраняла свою ссылку между рендерами
    const fetchData = useCallback((data: string[]) => {
        // Перебирает каждый элемент массива data и вызывает dispatch для загрузки данных для каждого любимого актива
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch]); // Указывает, что зависимостью этой функции является dispatch

// Использует хук useEffect для выполнения побочного эффекта (загрузки данных) при первом рендере компонента

    useEffect(() => {
        // Если данные уже были загружены, прекращает выполнение эффекта
        if (fetchDataRef.current) return;
        // Устанавливает fetchDataRef.current в true, чтобы предотвратить повторную загрузку данных
        fetchDataRef.current = true;

        // Вызывает fetchData для загрузки данных любимых активов
        fetchData(favoriteAssetName);
        dispatch(getTopPriceData())

    }, [favoriteAssetName, fetchData, dispatch]); // Указывает зависимости для useEffect: массив favoriteAssetName и функция fetchData

    const classes = useStyles()
    //----------------
    const renderFavoriteBlock = favoriteAssets.map((item: IChartData) => {
        // console.log('element', item)
        let currentPrice = 0
        let changePrice = 0
        item.singleAsset.forEach((el: ISingleAsset) => {
            currentPrice = el.current_price
            changePrice = el.price_change_percentage_24h
        })
        // const currentPrice = item.singleAsset.map(
        //     (el: any) => el.current_price
        // )
        // // const currentCap = item.data.market_caps[0]
        // // const currentCap = item.singleAsset.map(
        // //     (el: any) => el.market_cap
        // // )
        // //change price
        // const changePrice = item.singleAsset.map(
        //     (el: any) => el.price_change_percentage_24h
        // )

        return (
            <Grid item xs={12} sm={6} lg={6} key={item.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>${currentPrice}</h3>
                            {/*<p className={classes.cardCapitalize}>${currentCap[1].toFixed(0)}</p>*/}
                            <Box className={classes.priceTrend}>

                                <span style={{padding: '2px', borderRadius: '4px'}}
                                      className={
                                          changePrice > 0
                                              ? ` ${classes.trendUp}`
                                              : ` ${classes.trendDown}`
                                      }
                                >
                                     {changePrice > 0
                                         ? <img style={{transform: 'translateY(2px)'}} src={TrendUp} alt="TrendUp"/>
                                         : <img style={{transform: 'translateY(2px)'}} src={TrendDown} alt="TrendDown"/>
                                     }
                                    {Number(changePrice).toFixed(2)}%
                                </span>

                            </Box>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={item.price_chart_data}/>
                    </Grid>

                </Grid>
            </Grid>

        )
    })
    //----------------

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}
                >
                    {
                        favoriteAssets.length && <LineChart data={favoriteAssets}/>
                    }

                </Grid>
            </Grid>
            <Grid container className={classes.topPriceRoot}>
                <Grid item xs={12} sm={12} lg={12}>
                    {/*<TopPrice assets={assetsArray}/>*/}
                    {/*<TopPrice assets={filteredAssetArray.slice(0, 6)}/>*/}
                    <TopPrice assets={assetsArray} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;