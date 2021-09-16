import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls } from "@/controls/PointerLockControls"
import { usePlayerControls } from "@/hooks/usePlayerControls"
import { Vector3 } from "three"
import { useEffect, useRef } from "react"

const SPEED = 5

export const Player = (props) => {
    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump,
        sprint
    } = usePlayerControls()

    const [player, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 10, 0],
        ...props
    }))

    const velocity = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe(v => {
            velocity.current = v
            // console.log(v)
        })
    }, [])

    useFrame(({camera}) => {
        player.current.getWorldPosition(camera.position)

        let speedMultiplier = 1

        const direction = new Vector3()
        const frontVector = new Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))
        const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0)
        
        if (sprint) {
            speedMultiplier = 2
        }

        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED * speedMultiplier).applyEuler(camera.rotation)

        api.velocity.set(direction.x, velocity.current[1], direction.z)

        if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
            api.velocity.set(velocity.current[0], 10, velocity.current[2])
        }
        
    })

    return (
        <>
            <PointerLockControls />
            <mesh ref={player}></mesh>
        </>
    )
}