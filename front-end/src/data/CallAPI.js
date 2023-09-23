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
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}`
      );

      const resultat = new ResultData(
        res?.data?.data?.id,
        res?.data?.data?.userInfos,
        res?.data?.data?.todayScore,
        res?.data?.data?.keyData
      );

      return resultat;
    } catch (err) {
      console.log(err);
    }
  };

  static getActivity = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/activity`
      );
      const activity = new ActivityData(
        res?.data?.data?.userId,
        res?.data?.data?.sessions
      );

      return activity;
    } catch (err) {
      console.log(err);
    }
  };

  static getPerformance = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/performance`
      );
      const performance = new PerformanceData(
        res?.data?.data?.userId,
        res?.data?.data?.kind,
        res?.data?.data?.data
      );

      performance.kind = performance.kind
        .sort((a, b) => a.kind - b.kind)
        .reverse();

      return performance;
    } catch (err) {
      console.log(err);
    }
  };

  static getAverageSessions = async (id) => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_LOCALHOST_URL}/user/${id}/average-sessions`
      );
      const average = new AverageData(
        res?.data?.data?.userId,
        res?.data?.data?.sessions
      );

      return average;
    } catch (err) {
      console.log(err);
    }
  };
}
