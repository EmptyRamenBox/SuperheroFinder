import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.VUE_APP_APIURL
});

export const search = searchItem => api(`search/${searchItem}`);
