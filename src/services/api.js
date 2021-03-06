import axios from "axios";

const api = axios.create({
  baseURL: "https://apifazendoarte-production.up.railway.app/",
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
  async createProduct(fragrance, description, price, image) {
    try {
      const response = await api.post("aromatizador/create", {
        fragrance,
        description,
        price,
        image,
      });
      const { data } = response;
      return data;
    } catch (e) {
      return e.response.data;
    }
  },
  async updateProduct(id, fragrance, description, price, image) {
    try {
      const response = await api.put(`aromatizador/update/${id}`, {
        fragrance,
        description,
        price,
        image,
      });
      const { data } = response;
      return data;
    } catch (e) {
      return e.response.data;
    }
  },
  async deleteProduct(id) {
    try {
      const response = await api.delete(`aromatizador/delete/${id}`);
      const { data } = response;
      return data;
    } catch (e) {
      return e.response.data;
    }
  },
};

export const apiRequestsUsers = {
  setToken() {
      const token = localStorage.getItem("access_token");
      if (token) {
        api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      }
  },
  async getUsers() {},
  async getUserByEmail() {
    const email = localStorage.getItem("email");
    try {
      this.setToken();
      const response = await api.post("usuario/email", { email });
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  },
  async UserSignIn(email, password) {
    try {
      const response = await api.post("usuario/signin", { email, password });
      const { token, adm } = response.data;
      const emailRes = response.data.email;
      if (!token || !emailRes) {
        console.log("error missing email or token");
      } else {
        localStorage.setItem("access_token", token);
        localStorage.setItem("email", emailRes);
        localStorage.setItem("adm", adm);
        this.setToken();
      }
    } catch (e) {
      console.log(e.response.data);
    }
  },
  async UserSignUp(name, email, password) {
    api
      .post("usuario/create", { name, email, password })
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  },
  async addItemToCart(product) {
    const email = localStorage.getItem("email");

    api
      .post("usuario/additem", { email, product })
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e.data);
      });
  },
};
