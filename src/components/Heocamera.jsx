import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import {easing} from "maath"
const Heocamera = ({ children , ismobile}) => {
    const grpref=useRef();
    useFrame((state,delta)=>{
        easing.damp(state.camera.position,[0,0,20],0.25,delta) //property , target , smoothtime , change(delta)
        if(!ismobile){
            easing.dampE(grpref.current.rotation,[-state.pointer.y/3,state.pointer.x/2,0],0.02,delta)
        }
    })
    return (
        <group ref={grpref}>
            {children}
        </group>
    )
}

export default Heocamera
