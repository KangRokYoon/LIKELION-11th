# FE 세션 3주차 
------

## 컴포넌트구성요소 - React
-------
<img width="589" alt="스크린샷 2023-05-28 오전 1 50 02" src="https://github.com/KangRokYoon/likelionFE3_first-React/assets/129154834/cc59aa02-98c1-42d8-aec7-37b431b61a4c">

-------

# 코드리뷰 🖥️

### 1. 주석
### 2. map함수 
### 3. switch 함수 
### 4. export default 

-------

## 코드 수정 및 기록 ✍🏻

## 1.  주석 
  
  상단에 코드 수정 중에 둔 쓸데없는 주석은 다 지우고 git에 업로드 자신의 포트폴리오가 될 수 있으니 잘 관리 (중요)
  
------
 
## 2. map함수 

```js 
const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, content} : todo );

```

이 코드는 getAllTodos 함수를 호출하여 현재의 todos 배열을 가져온 후, map 메소드를 사용하여 배열의 각 요소를 순회하며 업데이트할 todo를 찾습니다.

map 메소드는 새로운 배열을 반환하며, 각 요소를 순회하면서 조건에 따라 해당 요소를 업데이트합니다. 여기서는 todo.id === todoId 조건을 만족하는 todo를 찾아 해당 todo의 content를 업데이트합니다. 그 외의 경우에는 기존의 todo를 그대로 유지합니다.

따라서, updateTodo 함수 내의 해당 코드는 todoId와 일치하는 todo의 content를 업데이트한 새로운 todos 배열을 생성하는 역할을 합니다.

------

## 3. switch
  
switch는 하나의 표현식에 대해 여러 조건들이 존재할 때 유용하게 쓸 수 있다. 즉, 어떤 상황에 대해 여러 경우(분기)로 나누어질 때 사용하면 좋다. (과일 가격 알려주기, 테마 고르기, 방향에 따른 캐릭터의 움직임, 평  가된 값에 따라 변환을 해주어야 할 때 등)
  
```js
    switch (expression) {
      case value1:
        // 표현식(expression)의 결과가 value1과 일치할 때 실행 됨
        break;
      case value2:
        // 표현식(expression)의 결과가 value2과 일치할 때 실행 됨
        break;
      // ...
      case valueN:
        // 표현식(expression)의 결과가 valueN과 일치할 때 실행 됨
        break;
      default:
        // 표현식(expression)과 value가 일치하지 않을 때 실행 됨
        break;
    }
```

+ ### expression

각각의 case 절에 맞추어볼 결과에 대한 표현식(expression)
  
+ ### case valueN(옵션)

표현식에 대해 일치 시키는 데 사용될 case 절이다. 표현식이 지정된 valueN과 일치하는 경우 case 절 내의 명령문은 switch 문의 끝부분이나 break가 올때까지 실행된다
  
+ ### default(옵션)

default를 넣을 경우, 표현식의 값이 case 절과 일치하지 않을 경우에 실행된다
  
## 예시 - 이건 얼마에요?

다음 예시를 보면 평가값을 '체리'로 주었다. 그럼 switch는 '체리'를 받아 값을 '체리'와 일치시키고, 해당 명령문을 실행한다. 마지막으로 break가 발생하면 switch를 벗어나 다음 명령문인 console.log('더 필요한건 없나요?')를 실행한다. 만약 break가 생략되면 다음 케이스의 명령문도 실행된다.
  
```js
function getFruitsCost(fruit) {
  switch (fruit) {
    case '오렌지':
      console.log('오렌지는 개당 1,200원입니다.');
      break;
    case '사과':
      console.log('사과는 개당 900원입니다.');
      break;
    case '바나나':
      console.log('바나나는 개당 700원입니다.');
      break;
    case '체리':
      console.log('체리는 개당 3,600원입니다.');
      break;
    case '망고':
    case '파파야':
      console.log('망고와 파파야는 개당 3,000원입니다.');
      break;
    default:
      console.log(`죄송해요, ${fruit}는 다 나갔어요. 😭`);
  }
  console.log('더 필요한건 없나요?');
}

getFruitsCost('체리');
// 체리는 개당 3,600원입니다.
// 더 필요한건 없나요?
```
  
## break를 생략하면 어떻게 될까?

break를 생략하게 되면 기준이 충족된 경우부터 명령문이 실행되며 그 후는 기준이 충족된 경우와 관계없이 다음 명령문이 실행된다. 다음 예시를 보자.
  
```js
function getTheme(theme) {
  switch (theme) {
    case 'Light':
      console.log('해당 테마는 라이트 테마입니다.');
      break;
    case 'Dark': // theme은 'Dark'이므로 기준이 충족되어 해당 블록이 실행 됨
      console.log('해당 테마는 다크 테마입니다.');
    // break를 생략(아 맞다!)
    case 'Gen-Z': // case 'Dark'에 break가 없기 때문에 case 'Gen-Z'도 실행 됨
      console.log('해당 테마는 Gen-Z 테마입니다.');
      break; // 여기서 break가 되어 switch를 벗어남
    default:
      console.log(`${theme} 테마는 존재하지 않습니다.`);
  }
}

getTheme('Dark');
// 해당 테마는 다크 테마입니다.
// 해당 테마는 Gen-Z 테마입니다.
```
  
## case 사이에 default를 넣는 경우

case 사이에 default를 넣으면 다음 예시와 같이 사용할 수 있다. 일치하는 항목을 찾지 못하면 기본테마로 되돌린다.

```js
function getTheme(theme) {
  switch (theme) {
    case 'Dark':
      console.log('다크 테마입니다.');
      break; // break가 있어서 'default:'가 실행되지 않는다.
    default:
      console.log(`${theme} 테마는 존재하지 않습니다. 기본 테마를 적용합니다.`);
    case 'Light':
      console.log('라이트 테마입니다.');
      break;
  }
}

getTheme('Ocean');
// Ocean 테마는 존재하지 않습니다. 기본 테마를 적용합니다.
// 라이트 테마입니다.
```

## 4. export default 작성법 

```js 
  export default function Header(props){  // 사용자 정의태그-리엑트에서는 컴포넌트 (대문자)
      return  <header>
        <h1><a href="/" onClick={(event)=>{
          event.preventDefault();  
          props.onChangeMode(); 
        }}>{props.title}</a></h1>
      </header>
    }
```
```js
function Header(props){  
    return  <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();  
        props.onChangeMode(); 
      }}>{props.title}</a></h1>
    </header>
  }
export default Header;

```


