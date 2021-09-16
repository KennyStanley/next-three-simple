import { useEffect, useRef } from "react"
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls"
import { extend, useThree } from "@react-three/fiber"

extend({ PointerLockControlsImpl })

export const PointerLockControls = (props) => {
    const { camera, gl } = useThree()
    const controls = useRef()

    useEffect(() => {
        document.addEventListener("click", () => {
            if (controls && controls.current && controls.current.lock != null) {
                controls.current.lock()
                console.log('click')
            }
        })
    }, [])

    return <pointerLockControlsImpl
        ref={controls} 
        args={[camera, gl.domElement]}
        {... props}    
    />
}