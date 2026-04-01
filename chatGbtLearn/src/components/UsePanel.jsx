import { useState } from "react";

function UserPanel() {

  const [uiText, setUiText] = useState({
    userTitle: "User Panel",
    nameTitle: "User Name",
    ageTitle: "User Age",
    statusTitle: "Status",
    changeNameBtn: "Change Name",
    increaseAgeBtn: "Increase Age",
    resetAgeBtn: "Reset Age",
    toggleStatusBtn: "Toggle Status"
  });


  const [userName, setUserName] = useState("Deme");
  const [age, setAge] = useState(25);
  const [status, setStatus] = useState("Offline");

  function changeName() {
    setUserName("TearingStars");
  }

  function increaseAge() {
    setAge(prev => prev + 1);
  }

  function resetAge() {
    setAge(25);
  }

  function changeStatus() {
    setStatus(prev => prev === "Offline" ? "Online" : "Offline");
  }

  function setSerafName ( ) {
    setUserName("Seraf");

  }

  return (
    <div className="user-panel">
      <h2>{uiText.userTitle}</h2>

      <div className="user-box">
        <h3>{uiText.nameTitle}</h3>
        <p>{userName}</p>
        <button onClick={changeName}>{uiText.changeNameBtn}</button>
      </div>

      <div className="user-box">
        <h3>{uiText.ageTitle}</h3>
        <p>{age}</p>
        <button onClick={increaseAge}>{uiText.increaseAgeBtn}</button>
        <button onClick={resetAge}>{uiText.resetAgeBtn}</button>
      </div>

      <div className="user-box">
        <h3>{uiText.statusTitle}</h3>

        <p className={status === "Online" ? "green" : "red"}>
          {status}
        </p>

        <button onClick={changeStatus}>
          {uiText.toggleStatusBtn}
        </button>
      </div>
    </div>
  );
}

export default UserPanel;

