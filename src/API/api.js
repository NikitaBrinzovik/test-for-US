import {Redirect} from "react-router-dom";

export const authAPI = {
    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(
    //         1-action
    //         2-action
    //
    //         );
    //     }, 3000);
    //
    // });
    // promise
    // .then(
    //     result => alert("Fulfilled: " + result),
    //     error => alert("Rejected: " + error.message) // Rejected: время вышло!
    // );
    //
    //
    /*login(data) {
        if (data === passCorrect) {
            return {"login": "developer21", "password": "123456", "rememberMe": true}
        }

    },*/
    logout() {
        //return instance.delete('/auth/login');
        return <Redirect to={'/'}/>;
    }
}






