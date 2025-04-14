import RoundChart from "@/components/common/roundChart/roundChart";
import React from "react";

const PerformanceCard = () => {
  return (
    <div className="performance_card">
      <div className="chart_container">
        <RoundChart />
        <div className="chart_value">
          <h5>85%</h5>
        </div>
      </div>
      <ul>
        <li>
          <span>🏆</span>
          <div className="stat-info">
            <h5>Total Achievements</h5>
            <p>85 points</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PerformanceCard;
