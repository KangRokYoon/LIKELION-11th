function Header(props){  // 사용자 정의태그-리엑트에서는 컴포넌트 (대문자)
    return  <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();  //클릭해도 Reload가 안 일어나게 함
        props.onChangeMode(); 
      }}>{props.title}</a></h1>
    </header>
  }
export default Header;