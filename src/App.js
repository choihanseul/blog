import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [title, changTitle] = useState( [ '남자 코트 추천', '강남 우동 맛집', '파이썬 독학' ]); // let [작명(변수), 작명(state 변경 도와주는 함수)] = useState(보관할 자료)
  let [like, addLike] = useState(0);

  return (
    // JSX 자바스크립트 안에서 html을 쓸 수 있게 해줌
    // JSX 문법1. class 넣을 땐 className
    // JSX 문법2. 변수 넣을 땐 {중괄호}
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
      <button onClick={()=> {
        let sort = [...title.sort()]
        changTitle(sort)
      }}>정렬</button>
        <h4>
          <span onClick={()=>{ changTitle([ '여자 코트 추천', '강남 우동 맛집', '파이썬 독학' ] ) }}>🌹 </span>{ title[0] } 
          <span onClick={()=>{ addLike(like + 1) }}>👍</span> { like } 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
