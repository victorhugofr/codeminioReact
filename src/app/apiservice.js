import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://codeminio.herokuapp.com/codeminio/'
})

class ApiService{

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    post(url,objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.post(requestUrl,objeto);
    }

    put(url,objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl,objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(url);
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.get(url);
    }
}

export default ApiService;
