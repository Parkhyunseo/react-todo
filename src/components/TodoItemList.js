/*
‘리스트’ 를 렌더링하게 될 때는,
특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성하세요. 
그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문입니다.
*/
import React, { Component } from 'react';
import TodoItem from './TodoItem';

/*
   const todoList = todos.map(
      (todo) => (
        <TodoItem
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id}
        />
      )
    );
*/
class TodoItemList extends Component {
  
  // 컴포넌트가 리렌더링을 할 지 말지 정해준다.
  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }
  
  render() {
    const { todos, onToggle, onRemove } = this.props;
    
    const todoList = todos.map(
      ({id, text, checked, color}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          color={color}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
          />
      )
    );
    
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;