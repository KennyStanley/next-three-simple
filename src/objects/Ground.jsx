import { usePlane } from "@react-three/cannon"

export const Ground = (props) => {
    const [ref] = usePlane(() => ({ 
        rotation: [-Math.PI/2, 0, 0],
        ...props }))

    return (
        <>
            <mesh ref={ref} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[1000, 1000]}  />
                <meshStandardMaterial attach="material" color="gray" />
            </mesh>
            <mesh rotation={[-Math.PI/2, 0, 0]}>
                <planeBufferGeometry attach="geometry" args={[1000, 1000, 100, 100]} />
                <meshStandardMaterial attach="material" color="white" wireframe />
            </mesh>
        </>
    )
}