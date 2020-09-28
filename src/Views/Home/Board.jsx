import React from 'react';
import {Link} from 'react-router-dom';
import './Board.css';

const Board = ({board}) =>{
    const {nametable, _tablesid} = board;
    
    return(
        <div className="col-4">
            <Link to={`/board/${_tablesid}`}>
                <div className="card card-board py-3" >
                    <div className="card-body">
                        <h5 className="card-title">{nametable}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Board;