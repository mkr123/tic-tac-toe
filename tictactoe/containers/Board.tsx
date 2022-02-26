
import {useState} from 'react';
import Square from '../components/Square';
const Board = () => {
  const [squares, setSquares] = useState( Array(9).fill(null));
  const [currPlayer, setCurrplayer] = useState <'X' | 'O' >(Math.round(Math.random())=== 1 ? 'X' :'O');
  const [winner, setWinner] = useState(null);
  const setSquareValue = (index: number) => {
      const newData = squares.map((val, i)=>{
        if (i === index){
          return currPlayer;
        }
        return val;
      })
      setSquares(newData);
      setCurrplayer(currPlayer === 'X'? 'O':'X');
  }
  return (
    <div>
      <p>Hey {currPlayer}, its your turn </p>
     {Array(9).fill(null).map(( _, i)=>{
       <Square
       winner = {winner}
       key={i}
       onClick ={()=>setSquareValue(i)}
       value = {squares[i]}
       />
     })     }
    </div>
  )

}
export default Board;