// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// [동적인 UI 만드는 step]
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성
function App() {
  let [title, changTitle] = useState( [ '남자 코트 추천', '강남 우동 맛집', '파이썬 독학' ]); // let [작명(변수), 작명(state 변경 도와주는 함수)] = useState(보관할 자료)
  let [like, addLike] = useState( [0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    // JSX 자바스크립트 안에서 html을 쓸 수 있게 해줌
    // JSX 문법1. class 넣을 땐 className
    // JSX 문법2. 변수 넣을 땐 {중괄호}
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
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
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        title.map(function(a, i) {
          return (
            <div className="list">
            <h4 onClick={()=> { setModal(!modal) }}>{ title[i] }</h4>
            <span onClick={()=> { addLike(like[i] + 1) }}>👍</span> { like[i] } 
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {
        modal === true ? <Modal/> : null
      }

    </div>
  );
}
// 어떤 걸 컴포넌트로 만들면 좋은가
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
