import React from 'react';

interface WelcomeBannerProps {
  name: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ name }) => {
  return (
    <div className=" py-4 px-6 rounded-lg border border-yellow-300 bg-yellow-50 ">
      <p className="text-lg font-medium text-yellow-800 text-center">
        Welcome to NYU Kreativespace, {name}
      </p>
    </div>
  );
};

export default WelcomeBanner;