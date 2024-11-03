import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';
import nasa from '../assets/astranaut.jpg'
import ship from '../assets/brian-mcgowan-8_C1mNcgWiQ-unsplash.jpg'
import people from '../assets/mario-verduzco-eANzCCWSKik-unsplash.jpg'
import tailwindConfig from '../../tailwind.config';
import moonparallax from '../assets/moonparallax.png'
import rocketparallax from '../assets/rocketparallax.png'
import star from '../assets/starswithoutbackground.png'
import Earth from'../assets/earth.png'
import astranautinspce from'../assets/astranautinsapace.png'



const Effects = () => {
     const [offsetY,setoffsetY]=useState(0)
     const handlescroll=()=>setoffsetY(window.pageYOffset)
 
 
      useEffect(()=>{
 
           window.addEventListener("scroll",handlescroll)
           return()=>window.addEventListener("scroll",handlescroll)
      
       },[])


       const cards = document.querySelectorAll('.card');

       const appearOptions = {
           threshold: 0.5,
       };
       
       const appearOnScroll = new IntersectionObserver((entries, observer) => {
           entries.forEach(entry => {
               if (!entry.isIntersecting) {
                   return;
               } else {
                   // Add classes to trigger the animations
                   entry.target.classList.remove('opacity-0', 'translate-y-10');
                   entry.target.classList.add('opacity-100', 'translate-y-0');
                   observer.unobserve(entry.target);
               }
           });
       }, appearOptions);
       
       cards.forEach(card => {
           appearOnScroll.observe(card);
       });
       




  return (
  < >

  <div style={{overflow:'hidden'}}>
<div className='grid grid-cols-3 ' style={{height:"140vh" ,backgroundImage:'URL(https://cdn.vectorstock.com/i/500p/49/83/space-with-stars-background-galaxy-vector-11544983.jpg)' }}>
         < div className="flex flex-col align-top"> 
         <img src={moonparallax} alt="" style={{transform:`translateY(${offsetY*0.7}px)`,overflow:'hidden', width:'400px'}}/>
         </div>
         <div className="flex flex-col justify-end">           
          <div className="flex items-center justify-center h-screen">
      <button className="text-white bg-transparent border border-white px-8 py-4 text-xl font-bold rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
        Explore the Universe
      </button>
    </div>

          <img src={rocketparallax} alt="" style={{transform:`translateY(-${offsetY*0.7}px)`,overflow:'hidden',width:'400px'}}/></div>
         <div className="flex flex-col "> <img src={astranautinspce} alt="" style={{transform:`translateY(${offsetY * 1.2}px) rotate(${offsetY *.2}deg)`,width:'900px'}}/></div>

          </div> 
     




          <div class="flex flex-wrap justify-around  bg-gray-950 p-6">
    <div class="card top w-4/12  m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105" >
        <img src="data:image/jpeg;base64,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"
         alt="What is Space?" class="rounded-t-lg w-full" style={{height:'400px'}} />
        <h3 class="text-center text-xl font-semibold mt-4 text-white">What is Space?</h3>
        <p class="text-center p-4 text-gray-300">Space is the vast, seemingly infinite expanse that exists beyond Earth and its atmosphere.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
    <div class="card bottom w-4/12 m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105">
        <img src="data:image/jpeg;base64,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" alt="Exploring Galaxies" class="rounded-t-lg w-full" style={{height:'400px'}} />
        <h3 class="text-center text-xl font-semibold mt-4 text-white">Exploring Galaxies</h3>
        <p class="text-center p-4 text-gray-300">Galaxies are massive systems that consist of stars, stellar remnants, interstellar gas, dust, and dark matter.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
    <div class="card top w-4/12 m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQv-m-UvejU7Ff9fQ55H1IqPSoYY0gAQ6YCQ&s" alt="Planets of Our Solar System" class="rounded-t-lg w-full" style={{height:'200px'}} />
        <h3 class="text-center text-xl font-semibold mt-4 text-white">Planets of Our Solar System</h3>
        <p class="text-center p-4 text-gray-300">From the fiery surface of Venus to the icy rings of Saturn, our solar system is home to diverse planets.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
    <div class="card bottom w-4/12 m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3ehA_WyRRH1hG9_a_YSWNiKknDg4hVlz5A&s" alt="The Life of Stars" class="rounded-t-lg w-full" style={{height:'200px'}} />
        <h3 class="text-center text-xl font-semibold mt-4 text-white">The Life of Stars</h3>
        <p class="text-center p-4 text-gray-300">Stars are the building blocks of galaxies, born from clouds of gas and dust, lighting up the night sky.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
    <div class="card top w-4/12 m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105">
        <img src="data:image/jpeg;base64,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" alt="The Enigma of Black Holes" class="rounded-t-lg w-full" style={{height:'300px'}}/>
        <h3 class="text-center text-xl font-semibold mt-4 text-white">The Enigma of Black Holes</h3>
        <p class="text-center p-4 text-gray-300">Black holes are regions where gravity is so strong that nothing, not even light, can escape from them.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
    <div class="card bottom w-4/12 m-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out transform hover:scale-105">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpRDRW6sDF8lBaulIUkXoFRUvwRBbNnpStA&s" alt="Humanity’s Quest for the Stars" class="rounded-t-lg w-full"style={{height:'300px'}} />
        <h3 class="text-center text-xl font-semibold mt-4 text-white">Humanity’s Quest for the Stars</h3>
        <p class="text-center p-4 text-gray-300">From Apollo moon landings to Mars rovers, discover how our curiosity drives us to explore the cosmos.</p>
        <button class="block mx-auto mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">Learn More</button>
    </div>
</div>



















    <div className='w-full bg-slate-950 bg-opacity-90 '>
   <h1 className='font-extrabold text-3xl p-4 text-white'>Spaceships and Rockets   </h1>
   <h4 className='font-medium p-1  text-white'>A rocket is used to carry a spacecraft from Earth’s surface to space, usually to low Earth orbit or beyond, and is sometimes called a launch vehicle.</h4>
<p className='font-thin p-1 pb-4  text-white'> Although rockets may appear similar, no two are alike because they are complex devices with millions of pieces and systems that must be calculated and constructed to work together. A rocket is chosen based on the spacecraft’s mission requirements. For example, the farther away from Earth the spacecraft needs to go, the bigger and more powerful the rocket needs to be.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae illum porro nostrum accusamus aliquam ab quibusdam, perspiciatis enim voluptatibus cumque ipsum sit quia eius minima? Unde ab rem maxime. </p>
    </div>
    <div >
         <Parallax  bgImage={ship} bgImageAlt="the cat" strength={800} style={{width:'100%',height:"70vh"}}>
         <h2 className='text-white border rounded w-fit p-2 mt-40 ml-80 text-2xl hover:bg-slate-700 transition-colors duration-300'> 
    Explore Spaceships
</h2>   
 </Parallax>
    </div>
    <div className='w-full bg-slate-950 bg-opacity-90 text-white '>
   <h1 className='font-extrabold text-3xl p-4'>Space Communications  </h1>
   <h4 className='font-medium p-1'>Space-qualified computing technology is designed to address the most computationally-intensive part of a mission. But for the future, NASA is going to need more power and more processing capabilities.</h4>
<p className='font-thin p-1 pb-4'>The NASA Technology Transfer program ensures that innovations developed for exploration and discovery are broadly available to the public, maximizing the benefit to the nation. NASA ensures inventions for space find practical uses closer to home. They often become solutions to different challenges – ones we didn’t set out to solve. Called NASA spinoffs, these technologies benefit life on Earth in the form of commercial products. The path to the Moon, Mars, and beyond requires technologies to get us where we need to go quickly, safely and efficiently. Space travel includes launch and in-space propulsion systems, cryogenic fluid management, and thermal management, as well as navigation and landing systems to get our supplies, equipment, and robotic or human explorers to diverse surface destinations.  </p>
    </div>
    <div>
         <Parallax  bgImage={people} bgImageAlt="the cat" strength={800} style={{width:'100%',height:"62vh"}}>
   <div className='flex justify-evenly items-center'> 
    <div>    <h2 className='border text-white rounded w-fit p-2 mt-40  hover:bg-slate-700 text-2xl'> Living in Space</h2></div>
    <div>    <h2 className='border text-white rounded w-fit p-2 mt-40  hover:bg-slate-700 text-2xl'> Manufacturing and Materials</h2></div>
    <div>    <h2 className='border text-white rounded w-fit p-2 mt-40   hover:bg-slate-700 text-2xl'> Robotics</h2></div>

   </div>
    </Parallax>
    </div>



    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-10  flex flex-col items-center space-y-4">
      {/* Title and Description */}
      <h2 className="text-2xl font-bold">Explore the Cosmos</h2>
      <p className="text-gray-400">Follow us to stay updated on space adventures!</p>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-4">
        <a
          href="#"
          className="text-2xl hover:text-teal-400 transform hover:-translate-y-1 transition duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-2xl hover:text-teal-400 transform hover:-translate-y-1 transition duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          className="text-2xl hover:text-teal-400 transform hover:-translate-y-1 transition duration-300"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="#"
          className="text-2xl hover:text-teal-400 transform hover:-translate-y-1 transition duration-300"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex space-x-4 text-gray-400 text-sm mt-6">
        <a href="#" className="hover:text-white transition duration-300">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition duration-300">
          Terms of Service
        </a>
        <a href="#" className="hover:text-white transition duration-300">
          Contact Us
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs mt-8">&copy; 2024 Space Explorers. All rights reserved.</p>
    </footer>

</div>
  </>
  )
}

export default Effects