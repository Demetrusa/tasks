type Props = {
  setActiveTab: (tab: "redeem" | "history") => void;
};

const Buttons: React.FC<Props> = ({ setActiveTab }) => {
  return (
    <div className="ButtonContainer">
      <button onClick={() => setActiveTab("history")}>
        History
      </button>

      <button onClick={() => setActiveTab("redeem")}>
        Redeem
      </button>
    </div>
  );
};

export default Buttons;