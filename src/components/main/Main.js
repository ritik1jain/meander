import React from 'react';
import Webcamm from './Webcamm';
import Camera from './Camera';

const Main = () => {
    return (
<div className="row">
  <div className="stream-box">
    <div className="preview-btn">Preview</div>
    {/* <video autoPlay="autoplay" width="100%" height="100%">
    
      <source src="assets/images/videoplay.mp4" type="video/mp4" />
      <source src="assets/images/videoplay.webm" type="video/webm" />
      <source src="assets/images/videoplay.ogg" type="video/ogg" />
    </video> */}
    <Camera />
    <div className="boxed-row">
      <span className="boxes">
        <ul>
          <li><img src="assets/images/box-icon-1.png" /></li>
          <li><img src="assets/images/box-icon-2.png" /></li>
          <li><img src="assets/images/box-icon-1.png" /></li>
          <li><img src="assets/images/box-icon-2.png" /></li>
          <li><img src="assets/images/box-icon-1.png" /></li>
          <li><img src="assets/images/box-icon-2.png" /></li>
        </ul>
      </span>
      <span className="full-icon">
        <img src="assets/images/full-screen-icon.png" />
      </span>
    </div>
  </div>
  <div className="stream-box-sm">
    <div className="signal-row">
      <span className="name">You</span>
      <span className="signal">
        <img src="assets/images/signal-icon.png" />
      </span>
    </div>
    <div className="stream-row">
      <div className="twich-toggle">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round" />
        </label>
      </div>
      {/* <video autoPlay="autoplay" width="100%" height="100%">
       
        <source src="assets/images/videoplay.mp4" type="video/mp4" />
        <source src="assets/images/videoplay.webm" type="video/webm" />
        <source src="assets/images/videoplay.ogg" type="video/ogg" />
      </video> */}
      <Camera />
      <div className="enlarge">
        <span className="onair">On Air</span>
        <span className="enlarge-icon"><img src="assets/images/enlarge-icon.png" /></span>
      </div>
    </div>
  </div>
  
</div>

    )
}

export default Main
