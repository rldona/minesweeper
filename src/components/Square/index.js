import './Square.css';

export default function Square({ square, hasMine }) {
  const explore = () => {
    console.log(square);
    console.log(hasMine);
  }

  const hasMineClass = square.hasMine ? 'hasMine' : '';

  return (
    <div className={`Square ${hasMineClass}`} onClick={explore}>
      {/* { square } */}
    </div>
  );
}
