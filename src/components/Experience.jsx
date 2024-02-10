import { Environment, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useThree } from "@react-three/fiber";

export const Experience = () => {

  const texture = useTexture("textures/bg.jpg");
  const viewport = useThree((state)=> state.viewport);
  return (
    <>
    
      <Avatar position={[0,-3,4]} scale={2}/>
      <Environment preset="sunset"/>
      <mesh>
        <planeGeometry args={[viewport.width,viewport.height]}/>
        <meshBasicMaterial map={texture}/>
      </mesh>
    </>
  );
};
