import {MainPage} from "../components/MainPage/MainPage";
import {Profile} from "../components/Profile/Profile";

import React from 'react'
import {AppBar,  Container, IconButton, Toolbar, Typography} from '@material-ui/core'

import {Menu} from '@material-ui/icons'
import {useDispatch, useSelector} from 'react-redux'


import {Redirect, Route, Switch} from "react-router-dom";




const App = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    console.log("fff:" , isLoggedIn)
    const dispatch = useDispatch()
    /*
    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }*/


    return (
        <div className="App">
            <AppBar position="static">

                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Hello! This is testing task
                    </Typography>

                </Toolbar>

                {/*<ErrorSnackbar/>*/}
            </AppBar>
            <Container fixed>
                <Switch>
                    {/*страницы с контентом*/}
                    <Route exact path={'/'} render={() => <MainPage/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>


                    {/*страница ввода неправильного url (err 404)*/}
                    <Route path={'/404'} render={() =>
                        <h1 style={{'textAlign': 'center', 'fontSize': '50px'}}>404 page not found</h1>}/>
                    {/* если свитч не попал ни в один роут, то подхватим редиректом и отправим на стр ошибки*/}
                    <Redirect to={'/404'} from={'*'}/>
                </Switch>

            </Container>
        </div>
    )
}

export default App;
