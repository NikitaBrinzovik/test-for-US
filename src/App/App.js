import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import st from "./App.module.css"
import {MainPage} from "../components/MainPage/MainPage";
import {Profile} from "../components/Profile/Profile";

import {logoutTC} from "../components/MainPage/Auth-Reducer";
import {useDispatch, useSelector} from "react-redux";


const App = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <div className={st.backGround}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Hello! This is a testing task
                    </Typography>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Logout</Button>}
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Switch>
                    <Route exact path={'/'} render={() => <MainPage/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/404'} render={() =>
                        <h1 style={{'textAlign': 'center', 'fontSize': '50px'}}>404 page not found</h1>}/>
                    <Redirect to={'/404'} from={'*'}/>
                </Switch>
            </Container>
        </div>
    )
}

export default App;
