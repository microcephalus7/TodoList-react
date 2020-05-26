import React, { Component } from "react";
import "./TodoItem.scss";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    // text : todo내용, checked : 체크박스 상태, id : todo 의 고유 아이디, onToggle : 체크박스를 키고 끄는 함수, onRemove : 아이템을 삭제시키는 함수
    const { text, checked, id, onToggle, onRemove, color } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle 실행되지 않도록 함. stopPropagation : 이벤트 확산을 멈춰줌.
            onRemove(id);
          }}
        >
          &times;
        </div>
        {/* CSS 유동적 설정 위해 템플릿 리터럴 사용 */}
        <div style={{ color }} className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">&#9670;</div>}
      </div>
    );
  }
}

export default TodoItem;
