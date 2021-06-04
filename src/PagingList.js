import React, {useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function PagingList(props) {

    let { page } = useParams();

    const url = "http://localhost:8282/board/list/" + page;

        useEffect(() => {
    
        console.log();
        
        axios.get(url)
        .then((response) => {
            
            props.setList(response.data.list);
            props.setPageMaker(response.data.pageMaker);
        
            console.log("성공")
        //  var active = pageMaker.cri.page ==  ? 'active' : ''
        })
        .catch((e) => {
            console.log("실패")
            
        })
    
    },[]);

    return(
        <div>
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
            {props.list.map((item) => (
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

    )

}

export default PagingList;