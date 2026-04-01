type Game = {
  id: string;
  img: string;
  value: number;
};

type Props = {
  history: Game[];
};

const History: React.FC<Props> = ({ history }) => {
  return (
    <div className="historyBox">
      <h2>History</h2>

      {history.length === 0 && <p>No history yet</p>}

      {history.map((item) => (
        <div key={item.id} className="historyItem">
          <img src={item.img} alt="game" width={120} />

          <p>{item.value}₾</p>
        </div>
      ))}
    </div>
  );
};

export default History;