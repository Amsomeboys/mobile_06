import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
        "Bearer nrj-j2uOJjxMe5g4v0b2OFyTMtA1V_Y0nynAPO41n35rcJgmOqbz1hLDySXtdR5gTxi0iLK1bOKOJF5VJ9Xq_bCyIqurapRdjrPey5H8bt39lDleNDkZeuO6jSv4ZHYx"
    },
});
