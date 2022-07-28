import ImportComponent from "./Components/ImportComponents";
import "./Css/App.css";
import Es6 from "./Components/Es6";
import Variable from "./Components/Variable";

function App({ pros }) {
  return (
    <div className="App">
      <h1>React 200 Start!</h1>
      <p>HTML 적용하기 </p>
      {/* <ImportComponent /> */}
      {/* <Es6 /> */}
      <Variable />
    </div>
  );
}

export default App;
