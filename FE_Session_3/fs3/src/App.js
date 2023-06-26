import { useState } from "react";
import { Header, Nav , Create, Article, Update} from "./components";

export default function App() {
  const [mode, setMode] =useState('WELCOME');  
  const [id, setId] = useState(null);  // 초기값이 없다
  const [nextId, setNextId] = useState(4);  
  const [topics, setTopics] = useState([ 
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);
  let content = null;
  let contextControl = null; // 지역변수
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <li><a href={'/update'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body} 
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }  
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      const newTopics = [...topics]  
      const updatedTopic ={id:id, title:title, body:body} 
      for(let i=0; i<newTopics.length; i++){
        if(newTopics[i].id === id){
          newTopics[i] =updatedTopic;
          break;
        }
      }
      setTopics(newTopics);   // 상세보기
      setMode('READ');
      
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{   
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');     // 값을 변경할때는 setMode
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={event=>{
          event.preventDefault();
          setMode('CREATE');      
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  ); 
} 


 