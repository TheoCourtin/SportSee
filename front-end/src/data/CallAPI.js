import axios from "axios";
import ActivityData from "./model/ActivityData";
import AverageData from "./model/AverageData";
import PerformanceData from "./model/PerformanceData";
import ResultData from "./model/ResultData";

/**
 * Create instance of axios
 * Documentation : https://axios-http.com/docs/instance
 */
const api = axios.create({
  baseURL: `${process.env.REACT_APP_LOCALHOST_URL}`,
});

/**
 * Class CallApi to collect data
 * @param {number} id
 * @returns {object} res
 */

export default class CallApi {
  static getInfos = async (id) => {
    try {
      const res = await api.get(`${process.env.REACT_APP_LOCALHOST_URL}/user/${id}`);
      // const result = new ResultData(res.data);
      // return result;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  static getActivity = async (id) => {
    try {
      const res = await api.get(`${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/activity`);
      // const activity = new ActivityData(res.data);
      // console.log(activity);
      // return activity;
      return res.data;
      
    } catch (err) {
      console.log(err);
    }
  };

  static getPerformance = async (id) => {
    try {
      const res = await api.get(`${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/performance`);
      // const performance = new PerformanceData(res.data);
      // return performance;
      return res.data;
      
    } catch (err) {
      console.log(err);
    }
  };

  // static getPerformance = async (id) => {
  //   try {
  //     const res = await api.get(`${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/performance`);
  //     const data = res.data.data;
  //     const dataKind = {
  //       1: { name: 'Cardio', order: 6 },
  //       2: { name: 'Energie', order: 5 },
  //       3: { name: 'Endurance', order: 4 },
  //       4: { name: 'Force', order: 3 },
  //       5: { name: 'Vitesse', order: 2 },
  //       6: { name: 'Intensité', order: 1 },
  //     };
  //     // let sortedData = data;
  //     console.log(data.data);
  //     const sortedData = res.data.data.sort((a,b) => { return dataKind[a.kind].order - dataKind[b.kind].order});
  //     console.log("Je passe ici");
  //       console.log(sortedData);
      
  //     console.log( {data: sortedData} );
  //     return { data: sortedData };
      
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  static getAverageSessions = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/average-sessions`
      );      
      // const average = new AverageData(res.data);
      // return average;
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}