import axios from 'axios'

const Fetch = async (url: string = null, config: any = null) => {
    const req = await fetch(url, config);
    const res = await req.json();
    return res;
}
const Axios = async (config: object) => {
    const req = axios(config);
    const res = await req
    return res;
}

export { Fetch, Axios }