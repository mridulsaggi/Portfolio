import React, { Suspense } from 'react'
import { HackerRoom } from '../components/Hackerroom'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Canvasloader from '../components/canvasloader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from "react-responsive"
import Heocamera from '../components/Heocamera'
import Button from '../components/Button'
import Target from '../components/Target'
import Laptopmodel from '../components/laptop'
import Cube from '../components/cube'
import Rings from '../components/rings'
const Hero = () => {
    // const l=useControls("Hackerroom",{
    //     positionX:{
    //         value:-2.5,
    //         min:-10,
    //         max:10
    //     },
    //     positionY:{
    //         value:-2.5,
    //         min:-10,
    //         max:10
    //     },
    //     positionZ:{
    //         value:-2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationX:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     rotationY:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     rotationZ:{
    //         value:0,
    //         min:-10,
    //         max:10
    //     },
    //     scale:{
    //         value:0.1,
    //         min:0,
    //         max:1
    //     }
    // })
    const ismini = useMediaQuery({ maxWidth: "380px" })
    const ismobile = useMediaQuery({ maxWidth: "520px" })
    const isphablet = useMediaQuery({ maxWidth: "620px" })
    const istab = useMediaQuery({ maxWidth: "720px" })
    return (
        <div className='min-h-screen w-full flex flex-col relative'>
            <div className='flex flex-col sm:mt-30 mt-20 w-full c-space gap-3 mx-auto items-center'>
                <p className='sm:text-2xl text-xl text-white font-generalsans font-medium'>Hi , i am Mridul Saggi<span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-white-600'>Full Stack Web Developer</p>
            </div>
            <div className='w-full h-full inset-0 absolute'>
                {/* <Leva/>  for showing positonal pannel on scrren to adjust the position scale and rotation */}
                <Canvas className='h-full w-full'>
                    <Suspense fallback={<Canvasloader />}>
                        {/* <PerspectiveCamera position={[ismobile?0.5:0,ismini?-7:ismobile?-4:isphablet?-1:0, 30]} makeDefault /> */}
                        <PerspectiveCamera position={[0, 0, 30]} makeDefault />
                        <Heocamera ismobile={ismobile}>
                            <HackerRoom
                                scale={ismini ? 0.07 : ismobile ? 0.08 : isphablet ? 0.076 : istab ? 0.085 : 0.095}
                                position={[ismini ? 0.5 : 1, ismini ? -4 : ismobile ? -4 : isphablet ? -4 : -6, -1.5]}
                                rotation={[0.4, -3.2, 0]}
                            />
                            <ambientLight intensity={1} />
                            <directionalLight intensity={0.5} position={[10, 10, 10]} />
                        </Heocamera>
                        <group>
                            <Target position={[ismini?-5:ismobile?-6.5:isphablet?-8:istab?-12:-18,ismini?-10:isphablet?-8:-10,0]} scale={ismini?0.6:ismobile?0.8:isphablet?1:istab?1.2:1.5} rotation={[0,1,0]}/>
                            <Laptopmodel position={[istab?7:10,-10,0]} scale={istab?2:2.5} rotation={[0,1,0]} istab={istab} isphablet={isphablet} ismobile={ismobile} ismini={ismini}/>
                            <Cube position={[ismini?3.5:ismobile?5:isphablet?8:istab?12:15,istab?-8:-10,0]} scale={ismini?0.4:ismobile?0.5:isphablet?0.6:istab?0.8:1}/>
                            <Rings position={[isphablet?-20:istab?-38:-50,ismini?5:8,0]} ismobile={ismobile} ismini={ismini}/>
                        </group>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 z-3 w-full">
                <a href="#about" className='w-fit'>
                    <Button name="Explore" isbeam containerclass="sm:h-[2rem] h-[3rem] bg-[red] sm:w-[25%] w-[40%] " />
                </a>
            </div>
        </div>
    )
}

export default Hero
