import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid #444;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #aaa;
  }
  .day {
    margin-top: 4px;
    color: #666;
    font-size: 20px;
  }
`;
const UndoneTaskList = styled.div`
  ${(props) =>
    props.undoneTasks.length === 0 ? `color: #666` : `color: #ffabab`};
  margin-top: 40px;

  font-size: 16px;
  font-weight: bold;
`;

const TodoHead = () => {
  const todos = useTodoState();
  // 남은 할일 보여주기
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <UndoneTaskList undoneTasks={undoneTasks}>
        할 일 {undoneTasks.length}개 남음
      </UndoneTaskList>
    </TodoHeadBlock>
  );
};

export default TodoHead;
