import React from 'react';

interface ProfileInfoProps {
  name: string;
  description: string;
  about: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, description, about }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">About</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{about}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;