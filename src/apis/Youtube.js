import axios from 'axios';

const KEY = 'AIzaSyBHcnfkICVH3D8kr9Dh81R30mOf5oaM74g'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})