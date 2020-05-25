import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3; // 이미 0,1,2 존재하므로 3으로 설정
  // 초기 state 값 지정. todo 객체 구분 위해 id 값 지정.
  state = {
    input: "", // 초기 input 값
    todos: [
      // 기본 아이템
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: true },
      { id: 2, text: "리액트 소개", checked: false },
    ],
  };
  // 텍스트 내용 바뀌면 state 업데이트
  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input 의 다음 바뀔 값.
    });
  };
  // 버튼 클릭시 새로운 todo 생성 후 state 업데이트
  handleCreate = () => {
    const { input, todos } = this.state;
    if (input === "") {
      alert("할 일을 입력해주세요");
    } else {
      this.setState({
        input: "", // 인풋 비우기
        // concat 사용하여 배열에 추가
        todos: todos.concat({
          id: this.id++, // 생성 될 때마다 id 씩 올라감
          text: input, // input 값 text 화.
          checked: false, // checked 는 false 로 기본.
        }),
      });
    }
  };
  // 눌러진 키가 enter이면 handleCreate 호출
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };
  // 체크하기 / 체크풀기
  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾음
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };
    this.setState({
      todos: nextTodos,
    });
  };
  /*
  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    this.state({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected, 
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }
   */
  // 아이템 제거하기
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id), // 파라미터로 받아온 id를 가지고 있지 않는 배열을 새로 생성해냄
    });
  };
  render() {
    // 비구조화 할당으로 this 생략
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    // Form props 으로 삽입
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
