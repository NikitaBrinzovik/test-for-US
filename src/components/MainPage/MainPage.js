import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@material-ui/core'
import {useFormik} from "formik";
import st from './MainPage.module.css'
import {loginTC} from "./Auth-Reducer";

//Я бы переименовал компоненту (и директорию соответсвенно) в Login, но в ТЗ указана "Главная страница"
export const MainPage = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

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
                errors.password = 'Required';
            } else if (values.password !== "123456") {
                errors.password = 'Invalid password! Try:" 123456"';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        }
    })

    const buttonDisabled = () => {
        if (Object.values(formik.values).some(v => v === '')) {
            return true
        } else return Object.keys(formik.errors).length !== 0
    }


    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return <Grid container justify="center" className={st.login_wrapper}>
        <Grid item xs={4} >
            <FormControl>
                <FormLabel style={{"color": "#04103f"}}>
                    <p>Use common test account credentials:</p>
                    <p>Login: developer21</p>
                    <p>Password: 123456</p>
                </FormLabel>

                <form onSubmit={formik.handleSubmit}  >
                    <FormGroup style={{"color": "#04103f"}}>

                        <TextField
                            label="login"
                            margin="normal"
                            type="text"
                            {...formik.getFieldProps("login")}
                        />

                        {formik.touched.login && formik.errors.login &&
                        <div style={{"color": "red"}}>{formik.errors.login}</div>}

                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />

                        {formik.touched.password && formik.errors.password &&
                        <div style={{"color": "red"}}>{formik.errors.password}</div>}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox {...formik.getFieldProps('rememberMe')}/>}
                        />

                        <Button disabled={buttonDisabled()} type={'submit'} variant={'contained'}
                                color={'primary'}>Login</Button>
                    </FormGroup>
                </form>
            </FormControl>
        </Grid>
    </Grid>
}

