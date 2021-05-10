import './Square.css';

export default function Square({ square }) {
  const explore = () => {
    if (square.hasMine) {
      alert('Game over');
    }
  }

  return (
    <div className={`Square ${square.hasMine ? 'hasMine' : ''}`} onClick={explore}>
      {/* { square } */}
    </div>
  );
}
