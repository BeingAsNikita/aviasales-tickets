
import * as axios from 'axios';
import axiosRetry from 'axios-retry';



const instance = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru/',
})

axiosRetry(instance, { retries: 2 });

export const API = {

    getSearchId() {
     return instance.get(`search`);
    },
    getTickets(id) {
        return instance.get(`tickets?searchId=${id}`);
    },

}