import react,{useState, useEffect} from 'react';
import './App.css';
import {Table, h1} from 'react-bootstrap';
import axios from 'axios';
import List from './List';

function App() {

  let startPage = 1;
  let [pageMaker, setPageMaker] = useState([]);
  let [list, setList] = useState([]);
  const url = "http://localhost:8282/board/list/" + startPage;
  // useEffect(() => {

  
  //   axios.get(url)
  //   .then((response) => {
      
  //     setList(response.data.list);
  //     setPageMaker(response.data.pageMaker);
     
   
  //     console.log("성공")
  //     console.log(url);
  //   //  var active = pageMaker.cri.page ==  ? 'active' : ''
  //   })
  //   .catch((e) => {
  //     console.log("실패")
      
  //   })

    

  // },[]);


  let array = [];
  for (let i = pageMaker.startPage; i <= pageMaker.endPage; i++) {
      array.push(i);
  }
  
  return (



    <div className="container">
      <h1 className="text-primary text-center">게시물 리스트</h1><br /><br />
      
     {/* <Table striped bordered hover >
        <thead>
          <tr className="text-center">
            <th>글번호</th>
            <th className="col-md-5">제목</th>
            <th className="col-md-3">작성자</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody className="text-center">
        {list.map((item) => (
          <tr>
          <td>{item.bno}</td>
          <td>{item.title}</td>
          <td>{item.writer}</td>
          <td>{item.regdate}</td>
          </tr>
          
        ))}
        </tbody>
      </Table> */}
        <List setList={setList} setPageMaker={setPageMaker} startPage={startPage} list={list}></List>
      {pageMaker.prev === true ? 
       <li class='page-item'><a class='page-link' href={pageMaker.startPage -1}> &laquo;</a></li> :""}
        {array.map(page => (
          <a href={page}>{page}</a>
        ))}
					
    </div>
    
  );
  
}

// function Axios() {
//   let [list, setList] = useState([]);
//   const url = "http://localhost:8282/board/list"
//   axios.get(url)
//     .then((response) => {
//       setList(response.data);
//       console.log("성공")
//     })
//     .catch(function(error){

//       console.log(error)
//     })
//   return(
//     <div>
//       {list.map((item) => (
//         <b>{item.bno}</b>
//       ))}
//     </div>
//   );
//   }


export default App;
