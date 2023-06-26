const todoInputElement = document.querySelector('.todo-input');
const todoEnterBtn = document.querySelector('.enter');
const todoList = document.querySelector('.todo-list');
const completeAllBtn = document.querySelector('.complete-all-btn');
const leftItem = document.querySelector('.left-items');
const showAll = document.querySelector('.show-all-btn');
const showActive = document.querySelector('.show-active-btn');
const showCompleted = document.querySelector('.show-completed-btn');
const clearAll = document.querySelector('.clear-all-btn');

let todos = []; // todo를 모아놓은 객체 배열 {id, content, isCompleted}
let id = 1; // todo 객체의 id가 될 숫자

let isAllCompleted = false; // todos 속 모든 todo의 isCompleted가 true인지 저장하는 Boolean

let curType = 'all'; // 현재 필터값을 저장하는 string -> 'all', 'active', 'completed' 
// (선택)

// 현재 todos를 매개변수 newTodos로 바꿔주는 함수
const setTodos = (newTodos) => todos = newTodos; 

// 현재 todos 배열 전체를 반환하는 함수
const getAllTodos = () => {
    //고정된 문자열 -> 상수로 표현하는게 더 좋은듯
    if(curType==='all') return todos;
    else if(curType==='active'){
        //아직 완료되지 않은일을 필터링 (false인 객체)
    return todos.filter(todos => !todos.isCompleted)
    }else{
        //완료된일 필터링
        return todos.filter(todos => todos.isCompleted)
    }
}
//모두
showAll.addEventListener('click', ()=>{
    curType='all'
    paintTodos();
})
//미완료한일
showActive.addEventListener('click', ()=>{
    curType='active'
    paintTodos();
})
//완료한일
showCompleted.addEventListener('click', ()=>{
    curType='completed'
    paintTodos();
})
//모두 지우기
clearAll.addEventListener('click',()=>{
    todos = [];
    paintTodos();
})

// 현재 input에 입력된 value를 가져와서 처리하는 함수 -> 키보드 enter, 버튼 클릭 2가지로 수행
const getInputValue = () => {
    // todoInputElement에 'enter'키가 "keypress"됐을 때, doTrimValue() 실행
    todoInputElement.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            doTrimValue(e.target.value);
        }
    });
    // input 옆 enter 버튼을 'click'했을 때, doTrimValue() 실행
    todoEnterBtn.addEventListener('click', () =>{
        doTrimValue(todoInputElement.value);
    });
};

getInputValue(); // 실행 

// 앞뒤 공백 제거 후, 빈 문자열이 아닐 경우 pushTodos() 실행
const doTrimValue = (val) =>{ 
    const trimVal = String(val).trim(); // string으로 형 변환 후, 공백 제거
    if( trimVal !== ''){ // 빈 문자열이 아니면
        pushTodos(trimVal); // pushTodos()로 todos 배열에 추가하기
    }
    else{ // 빈 문자열이면
        alert("내용을 입력 후 클릭하세요"); // alert 창
    }
    todoInputElement.value = ""; // input의 value 없애기
};

// todos 객체 배열에 객체 추가
const pushTodos = (context) =>{
    const newId = id++; // 아이디 할당
    const newTodos = [...todos, { id : newId, content : context, isCompleted : false }]; // 새로운 객체 배열 만들기, spread operator
    setTodos(newTodos); // setTodos()로 새로운 배열을 todos로 결정하기

    paintTodos(); // 갱신된 todos로 todo-list 작성하기
		setLeftItems(); // 남은 할일 계산하기
}

// 현재 todos에 있는 객체로 todo-list 작성하기
const paintTodos = ()=>{
    // 지금까지 list에 있던 li 요소를 지운다
    todoList.innerHTML = null;

    const allTodos = getAllTodos();
    allTodos.forEach(todo => paintFilterTodo(todo));
};

const paintFilterTodo = (todo) =>{
    // 감싸줄 li 태그 생성, 클래스명 추가
    const liElement = document.createElement('li');
    liElement.classList.add('todo-item');
    // console.log(liElement);

//    // 현재 객체가 완료된 객체면 클래스로 checked 추가
    if(todo.isCompleted){
       liElement.classList.add('checked');
   }

    // check button
    const checkElement = document.createElement('button');
    checkElement.classList.add('checkbox');
    checkElement.innerHTML = "✔︎";
    checkElement.addEventListener('click', ()=> completeTodo(todo.id));

    // content
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = todo.content;
    contentElement.addEventListener('dblclick', (e)=> dbclickTodo(e, todo.id));

    // delete button
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('delBtn');
    deleteElement.innerHTML = "✕";
    deleteElement.addEventListener('click', ()=> deletetodo(todo.id));
    
    // li 태그에 요소 합치기
    liElement.appendChild(checkElement);
    liElement.appendChild(contentElement);
    liElement.appendChild(deleteElement);

    // ul 태그에 현재 li 태그 합치기
    todoList.appendChild(liElement);
};

const setLeftItems = () => {
    const leftTodo = getAllTodos().filter(todo => todo.isCompleted == false);
    // console.log(leftTodo.length);
    leftItem.innerHTML = `🥕 오늘 할 일이 ${leftTodo.length}개 남아있습니다 🥕`;
} 

// todo-list에 input.edit-input 추가하기 (더블 클릭 이벤트)
const dbclickTodo = (e, todoId) => {
    const inputElement = document.createElement('input');
    inputElement.classList.add('edit-input');
    const content = e.target.innerHTML;
    inputElement.value = content;
    const curElement = e.target;
    const parentElement = curElement.parentNode;

    const clickBody = (e) => {
        if(e.target !== inputElement){
            parentElement.removeChild(inputElement);
        }
    }

    inputElement.addEventListener('keypress', (e)=>{
        if(e.key === "Enter"){
            if(String(e.target.value).trim() !== ""){
                updateTodo(e.target.value, todoId);
            }
            else{
                alert("현재 입력한 할 일이 없습니다!");
            }
        }
    });

    parentElement.appendChild(inputElement); // li 태그에 input 추가
    document.body.addEventListener('click', clickBody); // body에 click 이벤트 추가
}

// todos 객체 배열에서 할일 수정
const updateTodo = (content, todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, content} : todo );
    setTodos(newTodos);
    paintTodos();
}

const completeTodo = (todoId) => {
    console.log("completed todo with ID:", todoId);
    const newTodos = getAllTodos().map(todo => (todo.id === todoId) ? {...todo, isCompleted : !todo.isCompleted} : todo);
    setTodos(newTodos);
    paintTodos();
    setLeftItems();
};

const deletetodo = (todoId) => {
    console.log("Deleting todo with ID:", todoId);
    const newTodos = getAllTodos().filter(todo => todo.id !== todoId);
    setTodos(newTodos);
    paintTodos();
    setLeftItems();
};

completeAllBtn.addEventListener('click', () => completeAll());

const completeAll = () => {
    const newTodos = getAllTodos().map(todos => (!isAllCompleted) ? {...todos, isCompleted : true} : {...todos, isCompleted : false});
    if(!isAllCompleted) isAllCompleted = true
    else isAllCompleted = false
    setTodos(newTodos);
    paintTodos();
    setLeftItems();
}

// 남겨둔 코드 
// showAll.addEventListener('click', () => {
//     filterTodos('all');
// });
  
// showActive.addEventListener('click', () => {
//     filterTodos('active');
// });
  
// showCompleted.addEventListener('click', () => {
//     filterTodos('completed');
// });
  
// clearAll.addEventListener('click', () => {
//     clearAllTodos();
// });

// const filterTodos = () => {
//     // const allTodos = getAllTodos();
//     // let filteredTodos = [];
  
//     if (filterType === 'all') {
//       filteredTodos = allTodos;
//     } else if (filterType === 'active') {
//       return todos.filter(todo => !todo.isCompleted);
//     } else if (filterType === 'completed') {
//       filteredTodos = allTodos.filter(todo => todo.isCompleted);
//     }
  
//     paintTodos(filteredTodos);
// };
  
//   // 모든 todos를 삭제하는 함수
// const clearAllTodos = () => {
//     setTodos([]);
//     paintTodos([]);
//     setLeftItems();
// };