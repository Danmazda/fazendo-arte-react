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
    const email = localStorage.getItem("email");
    const response = await api.post("usuario/email", { email });
    const { data } = response;
    return data;
  },
  async UserSignIn(email, password) {
    const response = await api.post("usuario/signin", { email, password });
    const { data } = response;
    const { token } = data;
    const emailRes = data.email;
    if (!token || !emailRes) {
      console.log(data);
    } else {
      localStorage.setItem("access_token", data.token);
      localStorage.setItem("email", data.email);
      api.interceptors.request.use(async (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          api.defaults.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });
    }
  },
  async addItemToCart(product) {
    const email = localStorage.getItem("email");
    try {
      const response = await api.post("usuario/additem", { email, product });
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  },
};
