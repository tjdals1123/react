import React, {useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function PagingList(props) {

    let { page } = useParams();

    const url = "http://localhost:8181/board/list/" + page;

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
        
        </div>

    )

}

export default PagingList;