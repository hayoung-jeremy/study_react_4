import React, { useReducer, createContext, useContext } from "react";

// 초기값 :
const initialTodos = [
  { id: 1, text: "출근", done: true },
  { id: 2, text: "채은이 만나기", done: false },
  { id: 3, text: "JIRA-45", done: false },
];

// 리듀서 :
const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// state 와 dispatch 의 context 따로 지정
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => useContext(TodoStateContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
