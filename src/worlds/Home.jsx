import { Canvas } from "@react-three/fiber";
import { Ground } from "@/objects/Ground";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Vector3 } from "three";
import { Lights } from "@/lights";
import { Camera } from "@/camera";
import { Player } from "@/player";

export const Home = () => {
    return (
        <Canvas shadows gl={{ alpha: false }}>
            <Camera fov={75} position={[0, 10, 0]} />
            <Sky sunPosition={new Vector3(100, 10, 100)} />
            <Lights />
            <Physics gravity={[0, -30, 0]}>
                <Ground />
                <Player />
            </Physics>
        </Canvas>
    )
}