import { useState } from "react";
import "./Redeem.css";
import WinPopup from "./WinPopup";

import crossIcon from "./img/x.webp";
import clover from "./img/green-fsicon.webp";

import pragmaticLogo from "./pragmatic/pragmaticlogo.webp";
import olympus from "./pragmatic/newred-gatesofolympus.webp";
import bonanza from "./pragmatic/newred-sweetbonanza.webp";

import egtLogo from "./egt/egtlogo2.webp";
import burningHeart from "./egt/newred-burningHeart.webp";
import burningHo from "./egt/newred-burningHot.webp";
import vampireNigh from "./egt/newred-vampireNight.webp";

import fateplayLogo from "./fateplay/newreedem-pateplay.webp";
import regal10 from "./fateplay/newreedem-regal10.webp";

type Game = {
  id: string;
  img: string;
  value: number;
};

type Provider = {
  id: string;
  name: string;
  logo: string;
  games: Game[];
  
};
type Props = {
  onRedeem: (game: Game) => void;
};

const providers: Provider[] = [
  {
    id: "popular",
    name: "Popular",
    logo: pragmaticLogo,
    games: [
      { id: "g1", img: olympus, value: 0.4 },
      { id: "g2", img: bonanza, value: 0.5 },
      { id: "g3", img: vampireNigh, value: 0.2 },
    ],
  },
  {
    id: "pragmatic",
    name: "Pragmatic",
    logo: pragmaticLogo,
    games: [
      { id: "g4", img: olympus, value: 0.4 },
      { id: "g5", img: bonanza, value: 0.5 },
      { id: "g6", img: olympus, value: 0.2 },
    ],
  },
  {
    id: "egt",
    name: "EGT",
    logo: egtLogo,
    games: [
      { id: "g7", img: burningHeart, value: 0.4 },
      { id: "g8", img: burningHo, value: 0.5 },
      { id: "g9", img: vampireNigh, value: 0.2 },
    ],
  },
  {
    id: "fateplay",
    name: "Fateplay",
    logo: fateplayLogo,
    games: [
      { id: "g10", img: regal10, value: 0.4 },
      { id: "g11", img: regal10, value: 0.5 },
      { id: "g12", img: regal10, value: 0.2 },
    ],
  },
];

const Redeem: React.FC<Props> = ({ onRedeem }) => {
  const [activeProvider, setActiveProvider] = useState<string>("popular");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // 🔥 NEW
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const currentProvider = providers.find(
    (p) => p.id === activeProvider
  );

  return (
    <div className="redeemBox">
      <div className="newRedeem__head">
        <div className="newRedeem__head-text">
          გაანაღდე დაგროვებული ფრისპინები!
        </div>
        <img src={crossIcon} alt="close" />
      </div>

      <div className="newRedeem__body">
        <div className="newRedeem__body-inner">

          <div className="newRedeem__body-topTwo">

            {/* PROVIDERS */}
            <div className="newRedeem__body-providers">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  className={`newRedeem__body-provider ${
                    activeProvider === provider.id ? "active" : ""
                  }`}
                  onClick={() => setActiveProvider(provider.id)}
                >
                  <img src={provider.logo} alt={provider.name} />
                  <p>{provider.name}</p>
                </div>
              ))}
            </div>

            {/* GAMES */}
            <div className="newRedeem__body-provContent">
              <div className="newRedeem__body-provContentBody">

                <div className="newRedeem__body-gamesList active">
                  {currentProvider?.games.map((game) => (
                    <div
                      key={game.id}
                      className={`newRedeem__body-gameItem ${
                        selectedGame?.id === game.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedGame(game)}
                    >
                      <div className="newRedeem__body-gameImg">
                        <img src={game.img} alt="game" />
                      </div>

                      <div className="newRedeem__body-gameValue">
                        {game.value}₾
                      </div>

                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={selectedGame?.id === game.id}
                          readOnly
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="newRedeem__footer">
            <div className="newRedeem__counter">
              <img src={clover} alt="clover" />

              <div className="newRedeem__quantity">
                <div>{selectedGame ? 1 : 0}</div>
                <div>x</div>
                <div>{selectedGame?.value ?? 0}₾</div>
              </div>
            </div>

            <div
              className="newRedeem__mainButton"
                    onClick={() => {
            if (!selectedGame) return;

            onRedeem(selectedGame); // 🔥 SEND TO MAIN
            setIsPopupOpen(true);
        }}
            >
              გაანაღდე
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 POPUP */}
      {isPopupOpen && (
        <WinPopup
          game={selectedGame}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default Redeem;