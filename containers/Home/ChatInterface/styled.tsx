import styled from "styled-components";

export namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    gap: 10px;
  `;

  export const ChatList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    height: 300px;
    gap: 5px;
    overflow-y: scroll;
    overscroll-behavior: contain;
  `;

  export const Chat = styled.li`
    font-size: 16px;
    background-color: beige;
    padding: 5px 10px;
  `;

  export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 300px;
  `;

  export const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  export const StyledInput = styled.input`
    all: unset;
    border: 1px solid black;
    padding: 5px 10px;
    height: 20px;
    width: 230px;
    background-color: beige;
  `;
  export const Button = styled.input`
    all: unset;
    border: 1px solid black;
    background-color: beige;
    font-size: 10px;
    height: 20px;
    padding: 5px 10px;
  `;
}
