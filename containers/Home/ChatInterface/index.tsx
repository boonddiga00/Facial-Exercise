"use client";

import { FormEvent, useState } from "react";
import { S } from "./styled";

export default function ChatInterface() {
  const [chats, setChats] = useState<string[]>([]);
  const [text, setText] = useState("");
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text) return;
    setChats((prev) => [...prev, text]);
    setText("");
  };

  return (
    <S.Container>
      <S.ChatList>
        {[...chats].reverse().map((chat, i) => (
          <S.Chat key={`chat ${i}`}>{chat}</S.Chat>
        ))}
      </S.ChatList>
      <S.Form onSubmit={onSubmit}>
        <S.InputBox>
          <S.StyledInput type="text" value={text} onChange={handleInput} />
          <S.Button type="submit" value="보내기" />
        </S.InputBox>
      </S.Form>
    </S.Container>
  );
}
