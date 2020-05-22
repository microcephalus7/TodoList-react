import React, { Component } from "react";
import TodoItem from "./TodoItem";
// 컴포넌트 성능 최적화 위해 클래스형 사용
class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
