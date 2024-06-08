import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {useStyles} from "./style";
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp";

const AssetsTableComponent = (props: any) => {
    const {assets} = props

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    let filteredAssetArray = []
    // filter up to down and revers
    const [stateUD, setStateUD] = useState('up')
    if (stateUD === 'down') {
        filteredAssetArray = assets
            .slice()
            .sort((a: any, b: any) => a.current_price - b.current_price)
    } else {
        filteredAssetArray = assets
            .slice()
            .sort((a: any, b: any) => b.current_price - a.current_price)
    }
    // console.log(stateUD)
    // filter up to down and revers end


    const handlerUpDownPriceFilter = () => {
        stateUD === 'up'
            ? setStateUD('down')
            : setStateUD('up')
    }

    console.log(assets)
    const classes = useStyles()
    return (

        <TableContainer component={Paper} className={classes.myBackground}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">
                            Цена
                            <Button variant="text"
                                    className={classes.button}
                                    onClick={handlerUpDownPriceFilter}>
                                <ArrowCircleUpSharpIcon
                                    className={
                                        stateUD === 'up'
                                            ? `${classes.rowUpDown} `
                                            : `${classes.rowUpDown} ${classes.rowDown}`

                                    }/>
                            </Button>
                        </TableCell>
                        <TableCell align="right">Изменения ($)</TableCell>
                        <TableCell align="right">Изменения (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredAssetArray
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((element: any) => (
                            <TableRow
                                key={element.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {element.name}
                                </TableCell>
                                <TableCell align="right">{element.current_price}</TableCell>
                                <TableCell align="right"
                                           className={
                                               element.price_change_24h > 0
                                                   ? `${classes.priceUp}`
                                                   : `${classes.priceDown}`
                                           }
                                >{element.price_change_24h.toFixed(2)}</TableCell>
                                <TableCell align="right"
                                           className={
                                               element.price_change_percentage_24h > 0
                                                   ? `${classes.priceUp}`
                                                   : `${classes.priceDown}`
                                           }
                                >{element.price_change_percentage_24h.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            {/*//---------*/}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={assets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/*//---------*/}
        </TableContainer>
    );
};

export default AssetsTableComponent;