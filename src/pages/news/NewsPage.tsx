import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getNews} from "../../store/thunks/news";
import {Box, Grid, Link, Typography} from "@mui/material";
import {useStyles} from "./style";

const NewsPage = () => {

    const classes = useStyles()

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const {news} = useAppSelector(state => state.news)
    // console.log(news)
    const renderNewsBlock = news.map((element: any) => (
        <Grid container className={classes.newBlock} key={element.id}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.title}/>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box className={classes.newsTitle}><Typography variant='h3'>{element.title}</Typography></Box>
                <Box><Typography variant='body1'>{element.body}</Typography></Box>
            </Grid>
            <Grid item xs={12} md={12} className={classes.readMore}>
                <Typography variant='h4'>
                    <Link href={element.url} target='_blanck'>
                        Read more
                    </Link>
                </Typography>
            </Grid>

        </Grid>
    ))

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant='h2'>Новости</Typography>
            </Grid>
            <Grid>
                {renderNewsBlock}
            </Grid>
        </Grid>
    );
};

export default NewsPage;