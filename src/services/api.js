import axios from "axios";

const api = axios.create({
  baseURL: "https://apifazendoarte-production.up.railway.app/",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiRequestsProducts = {
  async getProducts() {
    try {
      const response = await api.get("aromatizador/all");
      const data = response.data.sort((a, b) =>
        a.fragrance.localeCompare(b.fragrance)
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
  async getProductById() {},
};

export const apiRequestsUsers = {
  async getUsers() {},
  async getUserCart() {
    try {
      const email = localStorage.getItem("email");
      if(email){
        const response = await api.post("usuario/email", { email });
        const { data } = response;
        return data;
      }
      
    } catch (error) {
      console.log(error.message);
    }
  },
  async UserSignIn(email, password) {
    try {
      const response = await api.post("usuario/signin", { email, password });
      const { data } = response;
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("email", data.email);
    } catch (error) {
      console.log(error.message);
    }
  },
};
