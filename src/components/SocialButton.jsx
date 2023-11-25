
import React from 'react';

const SocialButton = ({ icon }) => {

  return (
    <button className="btn btn-dark">
      <i className={`fab ${icon}`}></i>{icon.replace('fa-', '')}
    </button>
  );
};

export default SocialButton;
