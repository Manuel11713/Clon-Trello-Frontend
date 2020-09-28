import React from 'react';
import './Home.css';
import Board from './Board';


const Home = ({boards}) =>{
    return(
        <>
        {!boards?<div className="lds-dual-ring"></div>:
        <div className="container pt-3">
            <div className="row">
                {boards.map(board=><Board board={board} key={board._tablesid}/>)}
            </div>
        </div>}
        </>
    );
};
export default Home;