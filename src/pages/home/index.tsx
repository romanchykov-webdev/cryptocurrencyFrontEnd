// rsc
import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./style";
import AreaChart from "../../components/charts/areaChart/AreaChart";

const Home: FC = (): JSX.Element => {

// Извлекает состояние favoriteAssets из хранилища Redux с помощью хука useAppSelector
    const favoriteAssets: any[] = useAppSelector((store) => store.assets.favoriteAssets);
    console.log(favoriteAssets)
// Выводит в консоль текущее значение favoriteAssets для отладки
    console.log('favoriteAssets', favoriteAssets);

// Получает функцию dispatch из Redux с помощью хука useAppDispatch
    const dispatch = useAppDispatch();

// Инициализирует массив favoriteAssetName с помощью useMemo для предотвращения его пересоздания на каждом рендере
    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
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

    }, [favoriteAssetName, fetchData]); // Указывает зависимости для useEffect: массив favoriteAssetName и функция fetchData

    const classes = useStyles()
    //----------------
    const renderFavoriteBlock = favoriteAssets.map((item: any) => {
        console.log('elemet', item)
        const currentPrice = item.data.prices[0]
        const currentCap = item.data.market_caps[0]

        return (
            <Grid item xs={12} sm={6} lg={6} key={item.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>${currentPrice[1].toFixed(2)}</h3>
                            <p className={classes.cardCapitalize}>${currentCap[1].toFixed(0)}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={item.data.prices}/>
                    </Grid>

                </Grid>
            </Grid>

        )
    })
    //----------------

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {renderFavoriteBlock}
            </Grid>
        </Box>
    );
};

export default Home;