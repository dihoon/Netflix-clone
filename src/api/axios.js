import axios from 'axios';

const myAxios = axios.create({
  baseURL : "https://api.themoviedb.org/3",
  params: {
    api_key: "634517f24799fc979ef074f28366b115",
    language: "ko-KR",
  },
})

export default myAxios;