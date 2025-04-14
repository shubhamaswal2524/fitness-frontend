import { ReactNode } from "react";

const GrowthCard = ({ icon, amount, heading }: { icon: ReactNode, amount: string, heading: string }) => {
  return (
    <div className="activities_box_card">
      <div className="icon">{icon}</div>
      <div className="text_box">
      <h2>{amount}</h2>
      <p>{heading}</p>
      </div>
    </div>
  );
};
export default GrowthCard;