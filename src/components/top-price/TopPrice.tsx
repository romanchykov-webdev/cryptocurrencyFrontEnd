import React from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import {useStyles} from "./style";

import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';

const TopPrice = (props: any) => {
    const {assets, setStateUD,stateUD} = props
    // console.log(stateUD)
    const classes = useStyles()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handlerUpDownPriceFilter = () => {
        stateUD==='up'
        ? setStateUD('down')
        : setStateUD('up')
    }


    return (
        <>
            <TableContainer component={Paper}>
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
                            <TableCell align="right">Изменения (%)</TableCell>
                            <TableCell align="right">Изменения ($)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assets
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
        </>
    );
};

export default TopPrice;