import react,{useState, useEffect} from 'react';
import './App.css';
<<<<<<< HEAD
import PagingList from './PagingList.js'
import {Link,Route,History} from "react-router-dom";
import {Pagination} from 'react-bootstrap';
=======
import {Table, h1} from 'react-bootstrap';
import axios from 'axios';
import List from './List';
import {Link, Route, History} from "react-router-dom";
>>>>>>> 026ae7ed77fc2b51248636e0698f7bdb8239fb5f


function App() {

  
  const [pageMaker, setPageMaker] = useState([]);
  const [list, setList] = useState([]);
  

  let array = [];
  for (let i = pageMaker.startPage; i <= pageMaker.endPage; i++) {
      array.push(i);
    }

    
    let active = 2;
    let items = [];
    for (let number = pageMaker.startPage; number <= pageMaker.endPage; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = (
      <div>
        

        <Pagination size="lg"><a href={items}>{items}</a></Pagination>
        <br />

        
      </div>
    );

  return (



    <div className="container">
      <h1 className="text-primary text-center">게시물 리스트</h1><br /><br />
      
<<<<<<< HEAD
      
      <Route path="/:page">
        <PagingList setList={setList} setPageMaker={setPageMaker} list={list}></PagingList>
      </Route>  
      {pageMaker.prev === true ? 
       <li className='page-item'><a className='page-link' href={pageMaker.startPage -1}> 
       &laquo;</a></li> :""}

        
				

        <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          {array.map(page => (
          <li className="page-item"><a className="page-link" href={page}>{page}</a></li>
=======
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
          {page}
>>>>>>> 026ae7ed77fc2b51248636e0698f7bdb8239fb5f
        ))}
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
   
  );
  
        
}

//setList={setList} setPageMaker={setPageMaker} list={list}

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
