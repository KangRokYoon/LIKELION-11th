# FE 세션 2주차 
------

## 👊🏻 ToDoList 만들기
-------
<img width="1919" alt="스크린샷 2023-05-14 오후 6 23 31" src="https://github.com/KangRokYoon/ToDoList/assets/129154834/d6f32f84-6248-4514-b9d0-f69ff847c726">

-------

# 코드리뷰 🖥️

### 1. git에 파일 업로드할 때 상대 경로로 파일 작성
### 2. map함수 
### 3. 화살표 함수 

-------

## 코드 수정 및 기록 ✍🏻

## 1.  
  1. 절대경로

  Q "광화문 어디에 있어요?" 
  A "서울특별시 종로구 세종로 사직로 161이요"


  - 어디에 있든지 한 방에 가는 고유한 경로(주소)를 말한다. 

    ex) C:\users\document\untitled.jpg,  http://www.google.com


  2. 상대경로

  Q "(지금 광화문 역인데...) 광화문 어디에 있어요?" 
  A "여기(광화문역)에서 쭉 직진하면 보이는 세종대왕 동상 바로 뒤요"


  - '현재 내가 위치한 곳을 기준'으로 한 '그곳의 위치'이다. 

  - 다시한번 설명하자면 내가 작업중인 소스코드 파일이 위치한 폴더를 기준으로 작성한 상대적인 경로라는 것.



    /   루트 (가장 최상의 디렉토리로 이동 / Web root)

    ./   현재 위치 (파일의 현재 디렉토리를 의미)

    ../  현재 위치의 상단 폴더 (상위 디렉토리로 이동)



    - 만약 두단계 상위 디렉토리로 이동하려면
       '../../' 이렇게 사용하면 된다.

------
 
## 2. map함수 

```js 
const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, content} : todo );

```

이 코드는 getAllTodos 함수를 호출하여 현재의 todos 배열을 가져온 후, map 메소드를 사용하여 배열의 각 요소를 순회하며 업데이트할 todo를 찾습니다.

map 메소드는 새로운 배열을 반환하며, 각 요소를 순회하면서 조건에 따라 해당 요소를 업데이트합니다. 여기서는 todo.id === todoId 조건을 만족하는 todo를 찾아 해당 todo의 content를 업데이트합니다. 그 외의 경우에는 기존의 todo를 그대로 유지합니다.

따라서, updateTodo 함수 내의 해당 코드는 todoId와 일치하는 todo의 content를 업데이트한 새로운 todos 배열을 생성하는 역할을 합니다.

------

## 3. 회살표 함수

function이라는 말을 생략하고 ⇒ 라는 화살표 기호를 사용

```js
const test = () => {//함수 선언 
		//코드
}
test(); //함수 호출 

```
매개변수가 한 개인 유형

```js
// ES5
function sayHello(name) {
  console.log('Hello, ' + name + '!');
}

// ES6
const sayHello = name => console.log(`Hello, ${name}!`);

```

매개변수가 여러 개인 유형

```js
// ES5
function add(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => a + b;

```




    
