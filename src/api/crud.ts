import axios from "axios";

const baseUrl = "http://localhost:8000";
export class CrudApi {
  path: string;

  constructor(path: string){
    this.path = path;
  }
  async create(body: any) {
    const { data } = await axios.post(baseUrl + this.path, body);
    return data;
  }
  async fetchById(id: string) {
    const { data } = await axios.get(baseUrl + this.path + `/${id}`);
    return data;
  }

  async fetch() {
    const { data } = await axios.get(baseUrl + this.path);
    return data;
  }

  async deleteById(id: string) {
    const { data } = await axios.delete(baseUrl + this.path + `/${id}`);
    return data;
  }

  async updateById(id: string, body: any) {
    const { data } = await axios.put(baseUrl + this.path + `/${id}`, body);
    return data;
  }
}
