"use client";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const RoundChart = () => {
  const data01 = [{ value: 500 }];

  return (
    <div className="round_chart">
      <ResponsiveContainer >
        <PieChart>
          {/* Background for innermost Pie */}
          <Pie
            data={[{ value: 100 }]} // Full value for background
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={58}
            fill="#000" // Light background color
            startAngle={270}
            endAngle={-90}
            isAnimationActive={false}
            stroke="none"
          />
          {/* Innermost Pie with rounded borders */}
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={58}
            fill="#00D779"
            startAngle={90} // Start from the right and flow counterclockwise
            endAngle={-230}
            // cornerRadius={10}
             stroke="none"
            
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RoundChart;
