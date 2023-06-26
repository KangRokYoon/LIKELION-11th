export default function Nav(props){
    const lis = []
    for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id)); // target은 이벤트를 유발시킨 a 태그를 가리킨다
        }}>{t.title}</a>
      </li>) 
    }
    return <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  }
