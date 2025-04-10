"use client";
interface ProfileCardProps {
  title: string;
  foodvalue: string;
  food: string;
}

const DeitPlan = ({ title, food, foodvalue }: ProfileCardProps) => {
  return (
    <>
      <div className="deit_card">
        <h1 className="deit_plan">
          Today deit plan
        </h1>
        <div className="text_content">
          <ul>
            <li>
              <h2>{title}</h2>
              <h5>
                <span>{food}</span>
                {foodvalue}
              </h5>
            </li>
            <li>
              <h2>{title}</h2>
              <h5>
                <span>{food}</span>
                {foodvalue}
              </h5>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default DeitPlan;
