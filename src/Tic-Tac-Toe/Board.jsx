import React ,{useState}from 'react'
import Square from './Square'
import PlayAgain from './PlayAgain';

function Board() {

    const [state,setState] = useState(Array(9).fill(null));

    const [isXTurn,setIsTurn] = useState(true);

    const handleClick = (index) => {
        if(state[index]!==null){
            return;
        }
        const newState = [...state];
        newState[index] = isXTurn?"X":"O";
        setState(newState);
        setIsTurn(!isXTurn);
    };

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [3,5,9],
            [0,4,8],
            [2,4,6],
        ];

        
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a]!== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }

        return false;
    }

    const isWinner = checkWinner();

    
    function playAgain(){
        setState(Array(9).fill(null));
    }

    return (
    <div className='BoardContainer' >
        {isWinner?(<><span className="winner">{isWinner} Won the game </span><PlayAgain onclick={playAgain}/></>):(<>
        <div className="pName">Player { isXTurn ? "X":"0"}</div>
        <div className="board-row">
            <Square value={state[0]} click={()=>handleClick(0)}/>
            <Square value={state[1]} click={()=>handleClick(1)}/>
            <Square value={state[2]} click={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={state[3]} click={()=>handleClick(3)}/>
            <Square value={state[4]} click={()=>handleClick(4)}/>
            <Square value={state[5]} click={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={state[6]} click={()=>handleClick(6)}/>
            <Square value={state[7]} click={()=>handleClick(7)}/>
            <Square value={state[8]} click={()=>handleClick(8)}/>
        </div></>)}
        <PlayAgain/>
    </div>
  )
}

export default Board