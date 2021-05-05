import React, { Component } from 'react';


export class FrontPage extends Component {
        
    constructor() {
            super();
            this.state = {
                playing: false,
                audio : null
            }
            // this.Camera = this.Camera.bind(this);
            this.startVideo = this.startVideo.bind(this);
            this.stopVideo = this.stopVideo.bind(this);
            this.toggleMicrophone = this.toggleMicrophone.bind(this);
        } 

        async getMicrophone() {
          const audio = await navigator.mediaDevices.getUserMedia({
            audio: true,
          }
          );
          this.setState({ audio });

        }

        stopMicrophone() {
          this.state.audio.getTracks().forEach(track => track.stop());
          this.setState({ audio: null });
        }
        toggleMicrophone() {
          if (this.state.audio) {
            this.stopMicrophone();
          } else {
            this.getMicrophone();
          }
        }

     startVideo = () => {
      this.setState({
          playing : true
      });
      navigator.getUserMedia(
        {
          video: true
        },
        (stream) => {
          let video = document.getElementsByClassName('app__videoFeed');
          Array.from(video).forEach(e => e.srcObject = stream)
        },
        (err) => console.error(err)
      );
    };

    // startAudeo = () => {
    //     this.setState({
    //         audio : true
    //     });
    //     navigator.getUserMedia(
    //         {
    //           audio : true
    //         },
    //         (stream) => {
    //           let video = document.getElementsByClassName('app__videoFeed');
    //           Array.from(video).forEach(e => e.srcObject = stream)
    //         },
    //         (err) => console.error(err)
    //       );
    //   };
    
    stopVideo = () => {
      this.setState({playing : false});
      let video = document.getElementsByClassName('app__videoFeed')[0];
      if(video){
      video.srcObject.getTracks()[0].stop();}
    };
    
    // stopAudeo = () => {
    //     this.setState({audio : false});
    //     // let video = document.getElementsByClassName('app__videoFeed')[0];
        // if(video){
        // video.srcObject.getTracks()[0].stop();}
     
        // };
  


    render() {
        return (
            <>
   <div className="d-flex flex-column bg-slidebar">
     <a href="/" className="d-block p-3 text-center link-dark  text-decoration-none">
       <img src="assets/images/logo-icon.png" width="32px" />
     </a>
     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
       <li className="nav-item">
         <a href="#" className="nav-link py-3">
           <img src="assets/images/tags-icon.png" width="32px" />
         </a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link py-3">
           <img src="assets/images/fav-icon.png" width="32px" />
         </a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link py-3">
           <img src="assets/images/cloud-icon.png" width="32px" />
         </a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link py-3">
           <img src="assets/images/gift-icon.png" width="32px" />
         </a>
       </li>
       <li className="nav-item">
         <a href="#" className="nav-link py-3">
           <img src="assets/images/dotted-nav.png" width="32px" />
         </a>
       </li>
     </ul>
     <div className="dropdown p-3 text-center">
       <span className="name-l">K</span>
     </div>
   </div>
   <main className="col-md-12 col-lg-12 cont-gap main-data">
     <div className="row">
       <div className="stream-box-width">
         <span className="btn float-start live-btn">Go Live</span>
         <span className="float-end live-studio">Live Studio</span>
       </div>
     </div>
     <div className="row">
       <div className="stream-box">
         <div className="preview-btn app__container">Preview</div>
              <video
                width="100%" height="100%"
                autoPlay="autoplay"
                
                className="app__videoFeed"
              ></video>
         {/* <video autoPlay="autoplay" width="100%" height="100%">
           <source src="assets/images/videoplay.mp4" type="video/mp4" />
           <source src="assets/images/videoplay.webm" type="video/webm" />
           <source src="assets/images/videoplay.ogg" type="video/ogg" />
         </video> */}
         {/* <audio className="audio__container">
           <source src={this.state.audio ? this.state.audio.getAudioTracks() : ""} />
  
</audio> */}
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
           <video
                width="100%" height="100%"
                autoPlay="autoplay"
                className="app__videoFeed"
              ></video>
           {/* <video autoPlay="autoplay" width="100%" height="100%">
             <source src="assets/images/videoplay.mp4" type="video/mp4" />
             <source src="assets/images/videoplay.webm" type="video/webm" />
             <source src="assets/images/videoplay.ogg" type="video/ogg" />
           </video> */}
           <div className="enlarge">
             <span className="onair">On Air</span>
             <span className="enlarge-icon"><img src="assets/images/enlarge-icon.png" /></span>
           </div>
         </div>
       </div>
     </div>
     <div className="row">
       <div className="stream-box-controls">
         <div className="controls-nav">
           <ul>
             <li>
            <a className={this.state.audio ? "" : "hide"} onClick={this.toggleMicrophone}>
               <img src="assets/images/mic-icon.png" />
              </a>
        </li>
             <li>{this.state.playing ? (
            <a  onClick={this.stopVideo}><img src="assets/images/video-icon.png" /></a>
        ) : (
            <a className="hide" onClick={this.startVideo}><img src="assets/images/video-icon.png" /></a>
        )}</li>
            <li><a><img src="assets/images/screen-share-icon.png" /></a></li>
            <li><a><img src="assets/images/add-user-icon.png" /></a></li>
            <li><a><img src="assets/images/video-payer-icon.png" /></a></li>
            <li><a><img src="assets/images/rtmp-icon.png" /></a></li>
            <li><a><img src="assets/images/settings-icon.png" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>

          </>
        )
    }
}

export default FrontPage

 //  import React from 'react';
//  import Header from '../header/Header';
//  import Footer from '../footer/Footer';
//  import Main from '../main/Main';
//  import Sidebar from '../sidebar/Sidebar';

//  const FrontPage = () => {
//      return (
//          <>
//          <Sidebar />
//          <main className="col-md-12 col-lg-12 cont-gap main-data">
//          <Header />
//          <Main />
//          <Footer />
//          </main>
//          </>
//      )
//  }

//  export default FrontPage;
//   import React, {useState} from 'react';

 
//  const FrontPage = () => {
//     const [playing, setPlaying] = useState(false);
    
//     const Camera = () => {
  
//         return (
//           <div className="app">
//             <div className="app__container">
//               <video
//                 muted
//                 autoPlay
//                 className="app__videoFeed"
//               ></video>
//             </div>
            
//           </div>
//         );
//         }
//         {playing ? (
//             <button onClick={stopVideo}>Stop</button>
//         ) : (
//             <button onClick={startVideo}>Start</button>
//         )}
     

//     const startVideo = () => {
//       setPlaying(true);
//       navigator.getUserMedia(
//         {
//           video: true,
//         },
//         (stream) => {
//           let video = document.getElementsByClassName('app__videoFeed')[0];
//           if (video) {
//             video.srcObject = stream;
//           }
//         },
//         (err) => console.error(err)
//       );
//     };
    
//     const stopVideo = () => {
//       setPlaying(false);
//       let video = document.getElementsByClassName('app__videoFeed')[0];
//       video.srcObject.getTracks()[0].stop();
//     };
    

//      return (
//          <>
// <div>
//   <div className="d-flex flex-column bg-slidebar">
//     <a href="/" className="d-block p-3 text-center link-dark  text-decoration-none">
//       <img src="assets/images/logo-icon.png" width="32px" />
//     </a>
//     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
//       <li className="nav-item">
//         <a href="#" className="nav-link py-3">
//           <img src="assets/images/tags-icon.png" width="32px" />
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="#" className="nav-link py-3">
//           <img src="assets/images/fav-icon.png" width="32px" />
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="#" className="nav-link py-3">
//           <img src="assets/images/cloud-icon.png" width="32px" />
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="#" className="nav-link py-3">
//           <img src="assets/images/gift-icon.png" width="32px" />
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="#" className="nav-link py-3">
//           <img src="assets/images/dotted-nav.png" width="32px" />
//         </a>
//       </li>
//     </ul>
//     <div className="dropdown p-3 text-center">
//       <span className="name-l">K</span>
//     </div>
//   </div>
//   <main className="col-md-12 col-lg-12 cont-gap main-data">
//     <div className="row">
//       <div className="stream-box-width">
//         <span className="btn float-start live-btn">Go Live</span>
//         <span className="float-end live-studio">Live Studio</span>
//       </div>
//     </div>
//     <div className="row">
//       <div className="stream-box">
//         <div className="preview-btn">Preview</div>
//         {Camera()}
//         {/* <video autoPlay="autoplay" width="100%" height="100%">
//           <source src="assets/images/videoplay.mp4" type="video/mp4" />
//           <source src="assets/images/videoplay.webm" type="video/webm" />
//           <source src="assets/images/videoplay.ogg" type="video/ogg" />
//         </video> */}
//         <div className="boxed-row">
//           <span className="boxes">
//             <ul>
//               <li><img src="assets/images/box-icon-1.png" /></li>
//               <li><img src="assets/images/box-icon-2.png" /></li>
//               <li><img src="assets/images/box-icon-1.png" /></li>
//               <li><img src="assets/images/box-icon-2.png" /></li>
//               <li><img src="assets/images/box-icon-1.png" /></li>
//               <li><img src="assets/images/box-icon-2.png" /></li>
//             </ul>
//           </span>
//           <span className="full-icon">
//             <img src="assets/images/full-screen-icon.png" />
//           </span>
//         </div>
//       </div>
//       <div className="stream-box-sm">
//         <div className="signal-row">
//           <span className="name">You</span>
//           <span className="signal">
//             <img src="assets/images/signal-icon.png" />
//           </span>
//         </div>
//         <div className="stream-row">
//           <div className="twich-toggle">
//             <label className="switch">
//               <input type="checkbox" defaultChecked />
//               <span className="slider round" />
//             </label>
//           </div>
//           <video autoPlay="autoplay" width="100%" height="100%">
//             <source src="assets/images/videoplay.mp4" type="video/mp4" />
//             <source src="assets/images/videoplay.webm" type="video/webm" />
//             <source src="assets/images/videoplay.ogg" type="video/ogg" />
//           </video>
//           <div className="enlarge">
//             <span className="onair">On Air</span>
//             <span className="enlarge-icon"><img src="assets/images/enlarge-icon.png" /></span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="row">
//       <div className="stream-box-controls">
//         <div className="controls-nav">
//           <ul>
//             <li><button className="hide"><img src="assets/images/mic-icon.png" /></button></li>
//             <li>{playing ? (
//             <button className="hide" onClick={startVideo}><img src="assets/images/video-icon.png" /></button>
//         ) : (
//             <button className="hide" onClick={stopVideo}><img src="assets/images/video-icon.png" /></button>
//         )}</li>
//             <li><button><img src="assets/images/screen-share-icon.png" /></button></li>
//             <li><button><img src="assets/images/add-user-icon.png" /></button></li>
//             <li><button><img src="assets/images/video-payer-icon.png" /></button></li>
//             <li><button><img src="assets/images/rtmp-icon.png" /></button></li>
//             <li><button><img src="assets/images/settings-icon.png" /></button></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </main>
// </div>

//          </>
//      )
//  }
 
//  export default FrontPage
