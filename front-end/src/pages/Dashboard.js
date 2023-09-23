import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { getData } from "../data/services/getdata";
// Components
// import Error from "./Error";
import WelcomeUser from "../components/WelcomeUser";
import Card from "../components/Card";
// Charts
import ActivityChart from "../components/Charts/ActivityChart";
import AverageSessionChart from "../components/Charts/AverageSessionChart";
import PerformanceChart from "../components/Charts/PerformanceChart";
import ResultChart from "../components/Charts/ResultChart";
// Icons
import iconCalories from "../assets/icons-nutrition/calories.svg";
import iconGlucides from "../assets/icons-nutrition/glucides.svg";
import iconLipides from "../assets/icons-nutrition/lipides.svg";
import iconProteines from "../assets/icons-nutrition/proteines.svg";

/**
 * Returns a React component displays the Dashboard of the user
 * @params {number} id to useParams() methode
 * @returns a React Components
 */

const Dashboard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA", parseInt(id));
      // console.log(request);
      if (!request) return (window.location.href = "/oups");

      setData(request);
    };
    data();
  }, [id]);

  return (
    <main className="mainContainer dashboard">
      <WelcomeUser name={data.userInfos?.firstName} />
      <section className="statistique">
        <div className="charts">
          <ActivityChart />
          <div className="bottom-charts">
            <AverageSessionChart />
            <PerformanceChart />
            <ResultChart data={data.todayScore || data.score} />
          </div>
        </div>
        <div className="keydata">
          <Card
            icon={iconCalories}
            info={data?.keyData?.calorieCount}
            unit="kCal"
            text="Calories"
            iconClass="icon1"
          />
          <Card
            icon={iconProteines}
            info={data.keyData?.proteinCount}
            unit="g"
            text="Proteines"
            iconClass="icon2"
          />
          <Card
            icon={iconGlucides}
            info={data.keyData?.carbohydrateCount}
            unit="g"
            text="Glucides"
            iconClass="icon3"
          />
          <Card
            icon={iconLipides}
            info={data.keyData?.lipidCount}
            unit="g"
            text="Lipides"
            iconClass="icon4"
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
