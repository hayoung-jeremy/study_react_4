import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="출근" done={true} />
      <TodoItem text="채은이 만나기" done={false} />
      <TodoItem text="JIRA-45" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
