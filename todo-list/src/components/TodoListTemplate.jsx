// 틀
import React from "react";
import "./TodoListTemplate.scss";

// 컴포넌트 props 화
const TodoListTemplate = ({ form, children }) => {
  return (
    /* Template 화 */
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      {/* 추가 부분 */}
      <section className="form-wrapper">{form}</section>
      {/* List 부분 */}
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
