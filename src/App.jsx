import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense, useState } from "react";

function App() {

  const [started , setStarted]= useState(false);
  return (

    <>
    <LoadingScreen started={started} setStarted={setStarted} />
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#ececec"]} />
     <Suspense>
      {started && (
      <Experience />
      )}
      </Suspense>
    </Canvas>
    </>
  );
}

export default App;
