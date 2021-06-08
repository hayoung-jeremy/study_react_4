import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #aaa;
  border-radius: 16px;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #ffabab;
      color: #ffabab;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #aaa;
  ${(props) =>
    props.done &&
    css`
      color: #ffabab;
    `}
`;

const TodoItem = ({ id, done, text }) => {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
