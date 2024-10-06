"use client";

import AvatarCanvas from "@/components/AvatarCanvas";
import { Container } from "./home.styled";
import ChatInterface from "./ChatInterface";
import { useState } from "react";
import StaticAvatar from "@/components/StaticAvatar";

function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      {clicked ? (
        <AvatarCanvas setClicked={setClicked} />
      ) : (
        <StaticAvatar setClicked={setClicked} />
      )}
      <ChatInterface />
    </Container>
  );
}

export default Home;
