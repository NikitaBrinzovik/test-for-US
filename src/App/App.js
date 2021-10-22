import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {AppBar,  Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import st from "./App.module.css"
import {MainPage} from "../components/MainPage/MainPage";
import {Profile} from "../components/Profile/Profile";

const App = () => {

    return (
        <div className={st.backGround}>

            {/*Заготовка под расширение: header*/}
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Hello! This is a testing task
                    </Typography>
                </Toolbar>
            </AppBar>

            {/*Маршрутизация*/}
            <Container fixed>
                <Switch>
                    {/*страницы с контентом*/}
                    <Route exact path={'/'} render={() => <MainPage/>}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>

                    {/*страница ввода неправильного url (err 404)*/}
                    <Route path={'/404'} render={() =>
                        <h1 style={{'textAlign': 'center', 'fontSize': '50px'}}>404 page not found</h1>}/>

                    {/* если свитч не попал ни в один роут, то отправим на стр ошибки*/}
                    <Redirect to={'/404'} from={'*'}/>
                </Switch>
            </Container>

        </div>
    )
}

export default App;
