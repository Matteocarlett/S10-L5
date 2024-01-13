import React from 'react';
import Weather from './Component/Weather';
import CustomNavbar from './Component/Navbar';
import VideoBackground from './Component/VideoBackground';
import WindAndCurrentsMap from './Component/Venti';

const App = () => {
  return (
    <div>
      <VideoBackground />
      <CustomNavbar />
      <Weather />
      <WindAndCurrentsMap />
    </div>
  );
};

export default App;
