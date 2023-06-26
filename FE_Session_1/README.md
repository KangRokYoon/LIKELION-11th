# FE 세션 1주차 

------

## MBTI 테스트 만들기
### Netlify를 이용해서 배포 -> https://rr-mbti.netlify.app/
### 참고 자료 -> http://16types.glam.am/intro

-------

<img width="1436" alt="스크린샷 2023-05-07 오전 12 43 19" src="https://user-images.githubusercontent.com/129154834/236634236-89cb8992-33ec-4398-a5dc-2c2246c9280f.png">
<img width="1440" alt="스크린샷 2023-05-07 오전 12 43 59" src="https://user-images.githubusercontent.com/129154834/236634241-bd19a430-6c6b-4439-aece-ac03d89bb1bb.png">
<img width="1440" alt="스크린샷 2023-05-07 오전 12 44 18" src="https://user-images.githubusercontent.com/129154834/236634247-fff8ef85-432d-4d20-841a-cd9a8433dbe3.png">

-------

# 코드리뷰 🖥️

### 1. jQuery 사용이유에 대해서 설명하지 못하였다 -> 공부ing
### 2. 좋은 주석과 나쁜주석에 대해서 알아보기 -> 이번과제에는 스스로 보면서 흐름 파악이 필요하여 사용하였음 
### 3. 번수선언을 적절하게 할 필요가 있음
### 4. 파일을 생성할때 html,css,js폴더를 만들어서 그 안에 파일두기 -> 많은 작업물이 있을 때 유리함

-------

## 코드 수정할 부분 

## 1. 결과값을 가지고 있는 var q={} 부분을 const q={}를 사용해라 !! 
+  const, 변치않는 그대
 
 const는 constant(상수)를 뜻합니다. 즉, '항상 같은 수'를 말합니다.
 변수(變數)인데 상수(常數)라니 이 무슨.... 말같지 않은 말이지만 아무튼 그렇습니다.

 상수이기 때문에 const 키워드로 선언하면 변치 않는 값을 갖는 변수를 생성합니다.
 그렇기에 const로 선언한 변수는 값을 재할당할 수 없습니다. 시도해도 TypeError를 먹게 될 거에요 🥣

 ```js

 const myName = 'NY KIM';
 myName = 'Nana';  //TypeError: Assignment to constant variable

 ```
 또한 const 변수는 반드시 값이 할당되어야 합니다. 값 없이 선언하면 이번엔 SyntaxError를 뙇 먹겠죠.
 ``` js
 const a;
 console.log(a); //SyntaxError: Missing initializer in const declaration
 ```
 ------
 
## 2. var 변수를 let변수 사용하라 !!

우선, var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.
```js
    var name = 'bathingape'
    console.log(name) // bathingape

    var name = 'javascript'
    console.log(name) // javascript
```
변수를 한 번 더 선언했음에도 불구하고, 에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.

이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나, 코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러 값이 바뀔 우려가 있다.

그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const 이다.

위의 코드에서 변수 선언 방식만 바꿔보자.

```js
    let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared
```
name이 이미 선언 되었다는 에러 메세지가 나온다. (const도 마찬가지)

변수 재선언이 되지 않는다.

그렇다면 let 과 const 의 차이점은 무엇일까?

이 둘의 차이점은 immutable 여부이다.

let 은 변수에 재할당이 가능하다. 그렇지만,
```js

    let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) //react
```
const는 변수 재선언, 변수 재할당 모두 불가능하다.
```js
    const name = 'bathingape'
    console.log(name) // bathingape

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.
```

    
