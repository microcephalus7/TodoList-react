import React from "react";
import "./Form.scss";
// import props
const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      {/* value : 인풋의 내용, onCreate : 버튼 클릭 될 때 실행 될 함수, onChange : 인풋 내용이 변경 될 때 실행되는 함수, onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수 */}
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};
export default Form;
