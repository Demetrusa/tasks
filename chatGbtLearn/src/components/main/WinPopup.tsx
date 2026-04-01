import "./popup.css";

type Game = {
  img: string;
  value: number;
};

type Props = {
  game: Game | null;
  onClose: () => void;
};

const WinPopup: React.FC<Props> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="winPopup">
      <div className="winPopup__container">

        <div className="winPopup__container-header">
          <h1>Congratulations!</h1>
        </div>

        <div className="winPopup__container-content">
          <p>You won {game.value}₾</p>

          <img src={game.img} alt="prize" />
        </div>

        <div
          className="winPopup__container-btn"
          onClick={onClose}
        >
          close
        </div>

      </div>
    </div>
  );
};

export default WinPopup;