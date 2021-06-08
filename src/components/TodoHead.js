import React from "react";
import styled from "styled-components";

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
  .tasks-list {
    margin-top: 40px;
    color: #ffabab;
    font-size: 16px;
    font-weight: bold;
  }
`;

const TodoHead = ({ children }) => {
  return (
    <TodoHeadBlock>
      <h1>2021년 6월 8일</h1>
      <div className="day">화요일</div>
      <div className="tasks-list">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
