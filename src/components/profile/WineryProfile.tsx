import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileActions from './ProfileActions';
import QuickStats from './QuickStats';

const WineryProfile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <ProfileHeader />

      <div className="p-6 space-y-6">
        <ProfileInfo 
          name="Brown Estate"
          description="Napa Valley's First Black-Owned Winery"
          about="Established in 1995, Brown Estate is a family-owned and operated winery, 
                renowned for their exceptional Zinfandel wines. The estate spans across 
                450 acres in the eastern hills of Napa Valley."
        />

        <ProfileActions />
        <QuickStats />
      </div>
    </div>
  );
};

export default WineryProfile;