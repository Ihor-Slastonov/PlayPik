// import PropTypes from 'prop-types';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Rocket from '../../models/Rocket';
import { toRadians } from '../../utils/toRadians';

const AuthLayout3dScene = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-50 pointer-events-none">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={1} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Rocket
            scale={[0.1, 0.1, 0.1]}
            position={[-4, 3, 0.4]}
            rotation={[toRadians(45), 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AuthLayout3dScene;
