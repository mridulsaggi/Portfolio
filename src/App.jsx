import {Canvas, useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import { useRef } from "react"
import Navbar from "./sections/Navbar"
import Project from "./sections/Projects"
import Hero from "./sections/hero"
import Section from "./sections/Section"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
const Rotionalobject=()=>{
  const meshref = useRef(null)
  useFrame(()=>{
    if(meshref.current){
      meshref.current.rotation.x+=0.005
      meshref.current.rotation.y+=0.005
    }
  })
  return(
    <mesh ref={meshref}>
      <boxGeometry args={[1,1,1]}/>
      <meshLambertMaterial color={'#468585'} emissive={'#468585'}/>
    </mesh>
  )
}
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      <Section/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
      {/* <Canvas style={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <OrbitControls enablePan enableDamping />
        <directionalLight position={[1,1,1]} intensity={10} color={'0x9CDBA6'}/>
        <Rotionalobject/>
        <color attach="background" args={['#F0F0F0']}/>
      </Canvas> */}
    </main>
  )
}
export default App;