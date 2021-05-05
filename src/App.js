// import React from 'react';
// import FrontPage from './components/firstpage/FrontPage';

// function App() {
//   return (
//     <FrontPage />
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Channels from './pages/Channels';
import Events from './pages/Events';
import Payments from './pages/Payments';
import PlatformsLogin from './pages/PlatformsLogin';
import VideoStorage from './pages/VideoStorage';
import Platforms from './pages/Platforms';

function App() {
  return (
    <>
      <Router> 
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/channels' exact component={Channels} />
          <Route path='/events' exact component={Events} />
          <Route path='/payments' exact component={Payments} />
          <Route path='/platformslogin' exact component={PlatformsLogin} />
          <Route path='/videostorage' exact component={VideoStorage} />
          <Route path='/platforms' exact component={Platforms} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
