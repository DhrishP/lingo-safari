import './style.css'
import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
export type ProfilesPropss = {
  id: string;
  username: string;
  userId: string;
  coins: number;
  questions: string[];
};
export type ProfilesProps = {
  Leaderboard: ProfilesPropss[];
};

export default function Profiles({ Leaderboard }: ProfilesProps) {
  const user = useUser();

  return (
    <div>
      {Leaderboard.map((profile, index) => {
        return (
            <div id="profile">
          <div className="flex" key={profile.id}>
            <div className="item">
              <Image
                width={45}
                height={45}
                src={user.user?.imageUrl || ""}
                alt="PFP"
              />
              <div className="info">
                <h3 className="name text-purple-600">{profile.username}</h3>
                <span className='text-sm'>Finished {profile.questions.length} questions</span>
              </div>
            </div>
            <div className="item text-orane-400 space-x-2">
              <span>{profile.coins}</span><Image width={40} height={40} src={'/coin.png'} alt=''/>
            </div>
          </div>
            </div>
        );
      })}
    </div>
  );
}
