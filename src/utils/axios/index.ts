import axios from "axios";
//cryptocompare
const APY_KEY_NEWS = 'db2294dae8f7c17cac8d8637735c24534b9274a77397304df88ffe7210b03bf2'
//coingeco
const APY_KEY_COINGECO = 'CG-1pYzTN8BvrJVcTFsysW78d2D'
const token = sessionStorage.getItem("token");

export const instance = axios.create({
    baseURL: 'https://vercel.com/serhiis-projects-1baa2745/test',
    // baseURL: 'http://localhost:5000',
    // baseURL: 'https://52.178.75.133', //api server
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
export const newsInstance = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/v2/',
    timeout: 2000,
    headers: {
        'Authorization': `Apikey ${APY_KEY_NEWS}`,
    },
});
export const instanceAuth = axios.create({
    baseURL: 'https://vercel.com/serhiis-projects-1baa2745/test',
    // baseURL: 'http://localhost:5000',
    // baseURL: 'https://52.178.75.133', //api server
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        Authorization: `Bearer ${token}`
    }
});
export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Authorization': `Apikey ${APY_KEY_COINGECO}`,
    },
})