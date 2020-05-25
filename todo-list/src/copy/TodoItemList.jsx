import React, { Component } from "react";
import TodoItem from "./TodoItem";

// 동적인 리스트 컴포넌트 성능 최적화 위해 클래스형 컴포넌트.
class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    // todos : todo 객체들이 들어있는 배열, onToggle : 체크박스를 키고 끄는 함수, onRemove: 아이템 삭제시키는 함수
    // 함수 파라미터 구분에서 비구조화 할당 하여 객체 내부값들 따로 래퍼런스.
    const { todos, onToggle, onRemove } = this.props;
    // todos 안의 객체 보여주기 위해 map 으로 todos 배열 컴포넌트 배열로 변환.
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id} // 배열 렌더링 위함. 효율적인 컴포넌트 리렌더링 가능.
      />
    ));
    return <div>{todoList}</div>;
  }
}
export default TodoItemList;
