// 자바스크립트 파일에서 class 값을 query.Selecor()을 활용해 가져온다.
const clock = document.querySelector(".todo-title")

const getClock = () => {
    // 함수를 만들고 new Data() 객체를 활용해 시간을 받아온다
    const date = new Date();
    // padStart()는 만약에 2라는 숫자를(string 값)를 세 자릿 수로 만들려고 할때
    // 세 자릿 수가 아니라면 "0"을 추가하여 만든다
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
  };
// 가장처음 브라우저가 자바스크립트 setInterval(getClock, 1000);
// 읽어드릴때 1초의 딜레이가 발생한다
// 딜레이를 없애고자 함수 앞에 getClock()함수를 실행해준다
getClock();
// 매초마다 getClock() 함수를 1초마나 갱신해서 업로드하기 위해 setlnerval()을 사용한다
setInterval(getClock, 1000);
