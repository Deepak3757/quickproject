//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

async function fun(){
  let rep = fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  let data = await rep;
  console.log(data[0]);
  return data;
}

function App() {
  let ticket = fun();
  console.log(ticket);

  return (
    <>
    {ticket && ticket.length>0 ? "yes" : "no"}
    {console.log(ticket[0])};
      {/* <div>
        {fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
          .then((response) => {
            return response.json();s
          })
          .then((response) => {
            console.log(response['tickets']);
          })}
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
