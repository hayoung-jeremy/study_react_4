import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background: #444;
  &:hover {
    background: #555;
  }
  &:active {
    background: #333;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  z-index: 5;
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  font-size: 60px;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #272727;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #444;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #333;
  width: 100%;
  background: #222;
  color: #eee;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  // check input area's open status
  const [open, setOpen] = useState(false);
  // input value
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);
