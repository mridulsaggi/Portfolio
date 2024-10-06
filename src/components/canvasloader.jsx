import { Html, useProgress } from "@react-three/drei"

const Canvasloader = () => {
    const {progress}=useProgress()
  return (
    <Html
    as="div"
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }}
    >
        <span className="canvas-loader"/>
        <p className="text-white text-2xl mt-1">{progress!=0?`${progress.toFixed(2)}%`:'Loading....'}</p>
    </Html>
  )
}

export default Canvasloader
