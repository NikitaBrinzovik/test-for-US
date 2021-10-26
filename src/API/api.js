
export const authAPI = {
    login() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                debugger
                resolve(true);
            }, randomDelay(500, 1500));

        });
        return promise
    },
    logout() {
        const logout = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(false);
            }, randomDelay(500, 1500));
        });
        return logout
    },
}
const randomDelay = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}






