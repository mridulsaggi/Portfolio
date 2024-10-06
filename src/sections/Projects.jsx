import React, { useRef, useState } from 'react'
import { myProjects } from "../constants/index.js"
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Canvasloader from '../components/canvasloader.jsx';
import Democomputer from '../components/Democomputer.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Projects = () => {
  const [index, setindex] = useState(0);
  const length = myProjects.length;
  const handle_arrow = (direction) => {
    setindex((prev_index) => {
      if (direction == 'left') {
        return prev_index == 0 ? length - 1 : prev_index - 1
      }
      else {
        return prev_index == length - 1 ? 0 : prev_index + 1
      }
    })
  }
  let current_project = myProjects[index]
  
  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [current_project]);
  

  return (
    <>
      <div className="mt-10 p-4">
        <div className="grid p-5 text-white md:grid-cols-2 grid-cols-1 w-full bg-[#090909]">
          <div className='flex flex-col justify-center p-4 items-start'>
            <div>
              <p className='font-semibold animatedText text-2xl mb-[2rem]'>{current_project.title}</p>
              <p className='animatedText'>{current_project.desc}</p>
              <p className='animatedText'>{current_project.subdesc}</p>
            </div>
            <p className='my-[1rem] animatedText'>Tech Stack :</p>
            <div className='flex items-start justify-start'>
              {
                current_project.tags.map((e, idx) => (
                  <div key={idx} className='mx-2 p-2 rounded-md flex items-center bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg'>
                    <img src={e.path} alt={e.name} className='h-[2rem] w-[3rem] ' />
                  </div>
                ))
              }
            </div>
            <div className="navigate_arrows my-[2rem] w-full flex justify-between">
              <button className='arrow-btn' onClick={() => handle_arrow('left')}>
                <img src='assets/left-arrow.png' />
              </button>
              <button className='arrow-btn' onClick={() => handle_arrow('right')}>
                <img src='assets/right-arrow.png' />
              </button>

            </div>
          </div>
          <div className='border border-black-300 h-full sm:h-[30rem] bg-[#191919] shadow-lg shadow-[#111214]'>
            <Canvas>
              <ambientLight intensity={5} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<Canvasloader />}>
                  <group scale={1.7} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                    <Democomputer texture={current_project.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
