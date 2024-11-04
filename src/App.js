import logo from './logo.svg';
import './App.css';
import Lottie from "lottie-react";
import * as animationData from './assets/leaf.json';

const defaultOptions = {
   loop: false,
   //  autoplay: true,
   animationData: animationData
   //  rendererSettings: {
   //     preserveAspectRatio: 'xMidYMid slice'
   //  }
};

const interactivity = {
   mode: 'scroll',
   actions: [
      {
         visibility: [0.01, 0.45],
         type: 'seek',
         frames: [-29, 100]

      }
   ]
};

function App() {
   return (
      <div className='App'>
         <Lottie
            interactivity={interactivity}
            animationData={animationData}
            // options={defaultOptions}
            loop={false}
         />
         {/* <img
            loading='lazy'
            decoding='async'
            width='114'
            height='114'
            src='wp-content/uploads/2024/10/leaf1.gif'
            class='center-image'
            alt=''
         /> */}
      </div>
   );
}

export default App;
