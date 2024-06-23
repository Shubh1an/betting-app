import axios from "axios";

const instance = axios.create({
  baseURL: 'http://13.233.101.209/',
});
instance.interceptors.request.use(
    (config: any) => {
        let token = localStorage.getItem("accessToken");
        config.headers["Authorization"] = "Bearer " + token;
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);
instance.interceptors.response.use((res: any) => {
    return res;
},
    (error: any) => {

        localStorage.clear();
        // window.location = "/";
        return error;
    }
);

export default instance;
