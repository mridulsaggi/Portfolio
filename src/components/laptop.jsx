import React, { useRef } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Laptopmodel = ({ props ,istab , isphablet , ismobile ,ismini}) => {
  const { nodes, materials } = useGLTF('/laptop.gltf')
  const ref=useRef()
    useGSAP(()=>{
        gsap.to(ref.current.position,{
            // x:ref.current.position.x+0.5,
            y:ref.current.position.y+0.5,
            yoyo:true,
            duration:1.5,
            repeat:-1
        })
    })
  // Load the texture you want to display on the screen (image or video)
  const screenTexture = useTexture('/textures/desk/table.png') // Update with your image path
  return (
    // floatIntensity={ismobile?4:isphablet?0.8:1}
    <group dispose={null}  ref={ref}>
      <mesh
        {...props}
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[ismini?8:ismobile?10:isphablet?12:istab?15:25, ismobile?5:3, -10.3]}
        rotation={[-20, 0, 0]}
        scale={ismobile?7:isphablet?9:istab?10:15}
      />
      <mesh
        {...props}
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        position={[ismini?8:ismobile?10:isphablet?12:istab?15:25, ismobile?5.6:3.6, -11.5]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={ismobile?7:isphablet?9:istab?10:15}
      >
        {/* Apply the texture to the screen */}
     <meshStandardMaterial attach="material" map={screenTexture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/laptop.gltf')

export default Laptopmodel
