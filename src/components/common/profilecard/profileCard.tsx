import Image from "next/image";
import Button from "../button/button";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <>
      <div className="profile_card">
        <div className="image_box">
          <div className="inner_img">
            {profile?.profilePicture ? (
              <Image
                src={profile?.profilePicture}
                className="user_img"
                alt=""
                width={40} // or whatever size suits your layout
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            ) : null}
          </div>
        </div>
        <div className="text_content">
          <ul>
            <li>
              <span>name :</span>
              <h5>{profile?.name || ""}</h5>
            </li>
            <li>
              <span>Age :</span>
              <h5>{profile?.age || ""}</h5>
            </li>
            <li>
              <span>Body weight :</span>
              <h5>{profile?.weight || ""}</h5>
            </li>
            <li>
              <span>Location :</span>
              <h5>{profile?.address || ""}</h5>
            </li>
          </ul>
          <Button
            className="w-100 mt-4"
            onClick={() => router.push("/personal-information")}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
