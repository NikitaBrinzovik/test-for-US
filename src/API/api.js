import {Redirect} from "react-router-dom";

export const passCorrect = {"login": "developer21", "password": "123456", "rememberMe": true}

export const authAPI = {
    // const promise = new Promise((resolve, reject) => {
    //
    //     setTimeout(() => {
    //         resolve(
    //         1-action
    //         2-action
    //
    //         );
    //     }, 3000);
    //
    // });
    //
    // promise
    // .then(
    //     result => alert("Fulfilled: " + result),
    //     error => alert("Rejected: " + error.message) // Rejected: время вышло!
    // );
    //
    //
    login(data) {
        if (data === passCorrect) {
            console.log('1')
            //return <Redirect to={'/profile'}/>;
            return {"login": "developer21", "password": "123456", "rememberMe": true}
        }
        console.log('2')

    },
    me() {
        //return instance.get('/auth/me');
        return <Redirect to={'/profile'}/>;
    },
    logout() {
        //return instance.delete('/auth/login');
        return <Redirect to={'/'}/>;
    }
}






