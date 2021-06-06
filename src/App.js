import react,{useState, useEffect, useMemo} from 'react';
import './App.css';
import PagingList from './PagingList.js'
import {Link,Route,History,useParams} from "react-router-dom";
import {Pagination, Navbar, NavDropdown, Nav, Button, Form, FormControl, Table} from 'react-bootstrap';

import Select from "react-select";
import axios from 'axios';





function App() {

  
  const [pageMaker, setPageMaker] = useState([]);
  const [list, setList] = useState([]);
  
  
  //let { page, searchType, keyword} = useParams();
  let searchType = "";
  let keyword = "";
  let page = "1";

  const [searchUrls, setSearchUrls] = useState({

    searchType : "",
    keyword : "",
    page : ""
  });
  

  

  const option = useMemo(

      () => [
          { value: "t", label: "제목" },
          { value: "c", label: "내용" },
          { value: "w", label: "작성자" }
              
          
      ]

  );


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
      

      
      <Route path="/:page">
        <PagingList setList={setList} setPageMaker={setPageMaker} list={list}></PagingList>
      </Route>  
      <Route path="/:page/:searchType/:keyword"></Route>

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

        
				
      <div className="paging1">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            { pageMaker.prev === true ? 
            <li className="page-item"><a className="page-link" href={pageMaker.startPage -1}>Previous</a></li>
            : ""
            }
            {array.map(page => (
            <li className="page-item"><a className="page-link" href={page}>{page}</a></li>
          
          ))}
            <li className="page-item"><a className="page-link" href={pageMaker.endPage +1}>Next</a></li>
          </ul>
        </nav>
      </div>

      <div className="searchBar">
            
        <Form inline>
          <Select options={option} width='500px' id="searchType" name="searchType" />
          <FormControl type="text" placeholder="Search" className="mr-sm-2" id="keyword" name="keyword"  />
          
          <Button variant="outline-primary"  onClick={() => {

            searchType = document.getElementById('searchType').value;

            console.log(searchType.options[searchType.selectedIndex].value);
            
            keyword = document.getElementById('keyword').value;
            console.log(keyword);
            
            let searchUrl = "http://localhost:8181/board/list/" + page + "/" + searchType + "/" + keyword;
            axios.get(searchUrl)
                .then((response) => {
                    setList(response.data.list);
                    setPageMaker(response.data.pageMaker);

                    console.log("성공")
                })
                .catch((e) => {
                    console.log("실패")
                })
          }}><a href={"/"+page+"/"+searchType+"/"+keyword}>searchUrl</a></Button>
        </Form>
            
       {/*  */}
      </div>
      
      
      
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
