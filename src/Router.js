import React,{useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';

//Views
import Home from './Views/Home/Home';
import Board from './Views/Board/Board';

const Router = () =>{
    const [boards, setBoards] = useState(null);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0IiwiZnVsbG5hbWUiOiJsdWlzIG9zd2FsZG8gcGluZWRhIHJhbmdlbCIsInVzZXJuYW1lIjoiT3NiYW43dTciLCJlbWFpbCI6ImdvcmRpdG9AZ21haWwuY29tIiwiaWF0IjoxNjAxMjM3MDAxLCJleHAiOjE2MDE0OTYyMDF9.jgd-Rt7q5GhS05bV6dC3yoZLVw2_CRViZEmzuRIcGJs";

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get('/get-tables-user',{headers:{token}});
            setBoards(res.data.rows);
            
        }
        fetchData();
    },[]);
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=><Home boards={boards}/>} />
                <Route exact path={`/board/:tablesid`} render={props=>{
                    return(<Board tablesid={props.match.params.tablesid}/>);
                }}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;