import axios from "axios";

/**
 * Create instance of axios
 * Documentation : https://axios-http.com/docs/instance
 */
const api = axios.create({
  baseURL: `http://localhost:3000`,
});

export default class CallApi {
  static getInfos = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getActivity = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}/activity`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getPerformance = async (id) => {
    try {
      const res = await api.get(`http://localhost:3000/user/${id}/performance`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getAverageSessions = async (id) => {
    try {
      const res = await api.get(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}