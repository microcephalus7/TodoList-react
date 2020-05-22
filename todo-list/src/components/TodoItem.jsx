import React, { Component } from "react";
import "./TodoItem.scss";

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props; // 부모 컴포넌트 에게서 props 받고 비 구조화 할당.
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle 실행 안 되게 함
            onRemove(id); // 해당 id 삭제
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked ? "checked" : ""}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
