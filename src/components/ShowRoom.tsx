import * as THREE from "three";

export default function showRoom() {
  return (
    <>
      Home
      <mesh
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
