export const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        </>
    )
}