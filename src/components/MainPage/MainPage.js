//Я бы переименовал компоненту (и директорию соответсвенно) в Login, но в ТЗ указана "Главная страница"

import React, {useState} from 'react'
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@material-ui/core'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getLoginAC, loginTC} from "./Auth-Reducer";

export const MainPage = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const [canSubmit, setCanSubmit] = useState(false);

    // lib FORMIK
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors = {};
            if (!values.login) {
                errors.login = 'Required';
            } else if (values.login !== "developer21") {
                errors.login = 'Invalid login! Try:"developer21" ';
            }
            if (!values.password) {
                errors.password = 'Введите пароль. Обязательное поле';
            } else if (values.password !=="123456") {
                errors.password = 'Пароль должен быть больше 3 символов (123456)';
            }
            if (values.password === "123456" && values.login === "developer21"){
                setCanSubmit(!canSubmit)
            }
            return errors;
        },
        onSubmit: values => {
            //alert(JSON.stringify(values))
            dispatch(loginTC(values))
            dispatch(getLoginAC(values.login))
            //alert(JSON.stringify(values, null,2))
            formik.resetForm();// зачистить поля после подтверждения формы
            //return <Redirect to={'/profile'}/>
        }
    })
    const buttonDisabled = ()=>{
        if(Object.values(formik.values).some(v => v === '')){
            return true
        } else return Object.keys(formik.errors).length !== 0
    }
    //проверка на залогиненость и возможный редирект
    if (isLoggedIn) {

        return <Redirect to={'/profile'}/>
    }


    //lib material-ui
    return <Grid container justify="center">
        <Grid item xs={4}>
            <FormControl>
                <FormLabel>
                    <p>use common test account credentials:</p>
                    <p>Login: developer21</p>
                    <p>Password: 123456</p>
                </FormLabel>

                {/*оборачиваем обычным тегом форм, чтоб подвязать с формиком*/}
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            label="login"
                            margin="normal"
                            type="text"
                            {...formik.getFieldProps("login")}
                        />
                        {/*VALIDATION: если поле тронутое, но ввод не закончен & если невалидный ввод*/}
                        {formik.touched.login && formik.errors.login &&
                        <div style={{"color": "red"}}>{formik.errors.login}</div>}

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {/*VALIDATION*/}
                        {formik.touched.password && formik.errors.password &&
                        <div style={{"color": "red"}}>{formik.errors.password}</div>}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox {...formik.getFieldProps('rememberMe')}/>}
                        />


                        //////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//////////////////
                         {/*<Button  disabled={Object.keys(formik.errors).length !== 0} type={'submit'} variant={'contained'} color={'primary'}>Login</Button>*/}
                         <Button  disabled={buttonDisabled()} type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </form>

            </FormControl>
        </Grid>
    </Grid>
}

