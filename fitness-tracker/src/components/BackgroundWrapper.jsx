import React from "react";

function BackgroundWrapper() {
  return (
    <div id="background-overlay" className="background-wrapper" style={{ backgroundImage: `url(${imageUrl})` }}>
     <img src="https://media.istockphoto.com/id/1503324641/photo/rear-view-of-athletic-people-running-on-treadmill-in-a-gym.jpg?s=612x612&w=0&k=20&c=cxYRRh_bEt6h1o6mgraaNMFFAjONBQAot_e5MH06nd4=" alt="background image" />
    </div>
  );
}

export default BackgroundWrapper;
