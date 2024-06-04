import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import Paper from '@mui/material/Paper';
import {useStyles} from "./style";


const TopPrice = (props: any) => {
    const {assets} = props
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


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Цена</TableCell>
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
                    rowsPerPageOptions={[5,10, 25, 100]}
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