import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Target = (props) => {
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
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Target
