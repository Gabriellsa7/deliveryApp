import Image from "next/image";
import profile from "@/assets/Profile.png";

const Profile = () => {
  return (
    <div className="flex items-center gap-4">
      <Image width={60} height={30} src={profile} alt="Profile image" />
      <div className="flex flex-col gap-1">
        <p>Gabriel Santana Santos</p>
        <p>gabriel@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
