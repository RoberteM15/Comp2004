import "./App.css";
import ColorBoxesContainer from "./ColorBoxesContainer";

function App() {
  return (
    <>
      <ColorBoxesContainer
        colors={[
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#00FFFF",
          "#FF00FF",
          "#FFFF00",
          "#000000",
          "#FFFFFF",
          "#808080",
          "#C0C0C0",
          "#800000",
          "#808000",
          "#000080",
          "#800080",
          "#008080",
          "#FFA500",
          "#FFC0CB",
          "#FFD700",
          "#A52A2A",
          "#E6E6FA",
        ]}
      />
    </>
  );
}

export default App;
