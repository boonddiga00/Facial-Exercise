"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { S } from "./styled";
import { IAvatarProps } from "@/types/avatarType";

function Avatar({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} position={[0, -1.75, 3]} />;
}

function StaticAvatar({ setClicked }: IAvatarProps) {
  const AVATAR_URL =
    "https://models.readyplayer.me/66a25f9edcf0926abf83a3ff.glb?morphTargets=ARKit&textureAtlas=1024";

  return (
    <S.Container onClick={() => setClicked((prev) => !prev)}>
      <Canvas style={{ height: 200 }} camera={{ fov: 25 }}>
        <ambientLight intensity={2.5} />
        <Avatar url={AVATAR_URL} />
      </Canvas>
    </S.Container>
  );
}

export default StaticAvatar;
