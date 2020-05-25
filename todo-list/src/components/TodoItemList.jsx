import React, { Component } from "react";
import TodoItem from "./TodoItem";
// 컴포넌트 성능 최적화 위해 클래스형 사용
class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked, color }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        color={color}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
