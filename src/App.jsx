/* eslint-disable no-unused-vars */
import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'; // Import icons
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="h-screen w-full bg-blue-700 text-white flex justify-center items-center bg-cover bg-center"
         style={{ backgroundImage: 'url(/background.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
      <div className="relative text-center max-w-xl mx-4 p-6 rounded-lg bg-opacity-50 backdrop-blur-lg z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">You’ll Wish We Stayed Quiet... But It’s Too Late</h1>
        <p className="text-lg mb-8">We’ve been vibing since 2021… and now, we’re bringing the Sicc content online. Stay tuned, it’s about to get real!</p>
        
        <CountdownTimer />
        
        <div className="mt-8">
          <p className="text-sm sm:text-base">Follow us for updates:</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://www.instagram.com/siccfrequencies" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a href="https://www.youtube.com/@siccfrequencies" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
            <a href="mailto:connect@siccfrequencies.com">
              <FaEnvelope className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8">
  <p className="text-lg sm:text-xl mb-4">Want to be the first to know when we drop new content?</p>
  <a href="https://www.youtube.com/@siccfrequencies" target="_blank" rel="noopener noreferrer">
    <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 cursor-pointer transition-colors duration-300">
      Subscribe to Our Channel
    </button>
  </a>
</div>

      </div>
    </div>
  );
}

export default App;
