import { useState } from "react";
import Redeem from "./Redeem";
import History from "./History";
import Buttons from "./Buttons";

type Game = {
  id: string;
  img: string;
  value: number;
};

const Main = () => {
  const [activeTab, setActiveTab] = useState<"redeem" | "history">("redeem");

  // 🔥 HISTORY STATE
  const [history, setHistory] = useState<Game[]>([]);

  // 🔥 ADD TO HISTORY
  const handleRedeem = (game: Game) => {
    setHistory((prev) => [game, ...prev]); // newest first
  };

  return (
    <div>
      <Buttons setActiveTab={setActiveTab} />

      {activeTab === "redeem" && (
        <Redeem onRedeem={handleRedeem} />
      )}

      {activeTab === "history" && (
        <History history={history} />
      )}
    </div>
  );
};

export default Main;