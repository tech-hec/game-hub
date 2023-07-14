import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: 'c5c86e10518d4b96940f0ca5609485a1'
    }
})