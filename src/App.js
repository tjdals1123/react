import react,{useState} from 'react';
import './App.css';
import {Table, h1} from 'react-bootstrap';
import axios from 'axios';


function App() {

  let [list, setList] = useState([]);
  const url = "http://localhost:8282/board/list/1.json";

  let boardList = () => {
    axios.get(url)
    .then((response) => {
      
      setList(response.data.list);
      console.log("성공")
    })
    .catch((e) => {
      console.log("실패")
      
    })

  }

  
  return (



    <div className="container">
      <h1 className="text-primary text-center">게시물 리스트</h1><br /><br />
      {boardList()}
     <Table striped bordered hover >
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
      </Table>
      
      
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
