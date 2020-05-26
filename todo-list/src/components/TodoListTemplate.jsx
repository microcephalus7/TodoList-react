// 틀
import React from "react";
import "./TodoListTemplate.scss";
import "./Palette";

// 컴포넌트 props 화
const TodoListTemplate = ({ form, children, palette }) => {
  return (
    /* Template 화 */
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      {/* 팔레트 부분 */}
      <div className="palette-wrapper">{palette}</div>
      {/* 추가 부분 */}
      <section className="form-wrapper">{form}</section>
      {/* List 부분 */}
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
