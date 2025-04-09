import Image from "next/image";
import Button from "../button/button";

interface ProfileCardProps {
  // title: string;
  name: string;
  age: string;
  weight: string;
  location: string;
  profile: any;
}

const ProfileCard = ({
  // title,
  name,
  age,
  profile,
  weight,
  location,
}: ProfileCardProps) => {
  return (
    <>
      <div className="profile_card">
        <div className="image_box">
          <div className="inner_img">
            <Image src={profile} alt="" />
          </div>
        </div>
        <div className="text_content">
          <ul>
            {/* <li>
              <h2>{title}</h2>
            </li> */}
            <li>
              <span>name :</span>
              <h5>{name}</h5>
            </li>
            <li>
              <span>Age :</span>
              <h5>{age}</h5>
            </li>
            <li>
              <span>Body weight :</span>
              <h5>{weight}</h5>
            </li>
            <li>
              <span>Location :</span>
              <h5>{location}</h5>
            </li>
          </ul>
          <Button className="w-100 mt-5">Edit Profile</Button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
