
type Player = 'X'|'O'|null
const Square = ({value, onClick, winner}:{
  value:string|null;
  winner:Player;
  onClick:() => void;
}
  ) => {
    if(!value){
      return <button className="square" onClick={onClick} disabled={Boolean(winner)}></button>
    }
    return <button className={`square square_${value.toLocaleLowerCase()}`} disabled>{value}</button>
}
export default Square