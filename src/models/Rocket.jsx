/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

import gsap from 'gsap';

import { toRadians } from '../utils/toRadians';

import rocketScene from '../assets/3d/rocket.glb';

const Rocket = props => {
  const [isPlayed, setIsPlayed] = useState(true);
  const rocketRef = useRef();
  const { nodes, materials } = useGLTF(rocketScene);
  const timeline = gsap.timeline();

  const animateOnStart = () => {
    const rocketPosition = rocketRef.current.position;
    const rocketRotation = rocketRef.current.rotation;

    timeline
      .to([rocketPosition, rocketRotation], {
        y: 2,
        x: toRadians(45),
        duration: 1.5,
      })
      .to(rocketPosition, { y: 1, duration: 1.5 })
      .to(rocketPosition, { y: 0, duration: 1.5 })
      .to(rocketPosition, { x: -4, y: 0, z: 0.4, duration: 2 })
      .to(rocketRotation, { x: toRadians(45), y: 0, z: 0, duration: 2 }, '-=2');
  };

  useEffect(() => {
    if (isPlayed) {
      animateOnStart();
      setIsPlayed(false);
    }
  });

  return (
    <group ref={rocketRef} {...props}>
      <group position={[0.014, 0, 0.012]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Fire} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Accent1} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Red2} />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.material_4}
        />
      </group>
    </group>
  );
};

export default Rocket;
