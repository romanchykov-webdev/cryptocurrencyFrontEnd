import React from 'react';
import {deleteUser} from "../../store/thunks/auth";
import {Checkbox, FormControlLabel, FormGroup, Grid, Typography} from "@mui/material";
import {useStyles} from "./style";

const DeleteUserAccountComponent = () => {
    const classes = useStyles();
    // deleteUser
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant="h2">Удаление аккаунта </Typography>
            </Grid>
            <Grid item  className={classes.alertMessage}>
                <Typography variant='body1'>Уважаемый пользователь, удаляя свой аккаунт, вы удаляете все
                    персональную информацию. После удаления вся сохраненная вами
                    информация будет недоступна.</Typography>
            </Grid>
            <Grid>
                <FormGroup>
                    59:31
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                </FormGroup>
            </Grid>
        </Grid>
    );
};

export default DeleteUserAccountComponent;