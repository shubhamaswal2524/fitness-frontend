import Marquee from "react-fast-marquee";
import { StarIcon } from "../../../../public/assets/icons";

const MarqueeBar = () => {
  const data = [
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
    {
      line: "live classes",
    },
    {
      line: "online trainers",
    },
    {
      line: "personal training",
    },
  ];

  return (
    <>
      <div className="marquee_box">
        <Marquee>
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                <StarIcon />
                {item.line}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeBar;
