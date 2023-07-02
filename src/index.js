import React from "react";
import ReactDOM from "react-dom";
import WelcomeGreeting from "./WelcomeGreeting";

const customStyle = {
  color: " "
};

const time = new Date().getHours();
// const time = 19;
let greeting;
if (time < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (time <= 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}
// console.log(time, greeting);

ReactDOM.render(
  <div>
    <WelcomeGreeting />
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
