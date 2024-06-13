import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography} from "@mui/material";
import {useStyles} from "./style";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../utils/hook";
import {deleteUser} from "../../store/thunks/auth";

const DeleteUserAccountComponent = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState<boolean>(false);
    // console.log(checked)
    const navigate=useNavigate()
    const dispatch=useAppDispatch();


    function handlerButtonDeleteAccount() {
        console.log('ok')
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('firstName')
        navigate('/login')
    }

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant="h2">Удаление аккаунта </Typography>
            </Grid>
            <Grid item className={classes.alertMessage}>
                <Typography variant='body1'>Уважаемый пользователь, удаляя свой аккаунт, вы удаляете все
                    персональную информацию. После удаления вся сохраненная вами
                    информация будет недоступна.</Typography>
            </Grid>
            <Grid item className={classes.checkBoxBlock}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        className={classes.checkbox}
                    />} label="Я соглашаюсь"/>
                </FormGroup>
            </Grid>
            <Grid item className={classes.blockButton}>
                <Button disabled={!checked}
                        variant='outlined'
                        style={{backgroundColor: checked ? 'blue' : 'grey'}}
                        onClick={handlerButtonDeleteAccount}
                >Удалить аккаунт</Button>
            </Grid>
        </Grid>
    );
};

export default DeleteUserAccountComponent;