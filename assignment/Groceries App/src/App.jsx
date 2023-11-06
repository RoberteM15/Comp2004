//this is importing the css for App.jsx and the rest of the files
import "./App.css";
//importing GroceriesApp that has done all of the logical work
import GroceriesApp from "./GroceriesApp.jsx";


function App() {
  //Creating the return to get the title Groceries App and to call the GroceriesApp function
  return <>
  <h2>Groceries App</h2>
  <GroceriesApp />
  </>;
}

export default App;
