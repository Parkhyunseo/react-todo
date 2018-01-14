import React, {Component} from 'react';
import './TodoItem.css';

/*
text: todo 내용
checked: 체크박스 상태
id: todo 의 고유 아이디
onToggle: 체크박스를 키고 끄는 함수
onRemove: 아이템을 삭제시키는 함수
*/

/*
                // "todo-text" + checked  && 'checked'와 동일
                // 불편하면 classnames 모듈을 사용하자.
*/
class TodoItem extends Component{
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
        
    }
    
    render(){
        const { text, checked, id, color, onToggle, onRemove } = this.props;
        
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div style={{ color }} className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
                </div>
        );
    };
};

export default TodoItem;