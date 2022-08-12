import ImportComponent from "./Components/ImportComponents";
import "./Css/App.css";
import Es6 from "./Components/Es6";
import Variable from "./Components/Variable";
import SpreadOperator from "./Components/SpredOperator";
import ForEach from "./Components/ForEach";
import Map from "./Components/Map";
import Props from "./Components/Props";
import PropsNode from "./Components/PropsNode";
import Fragments from "./Components/Fragments";
import Fragements from "./Components/Fragments";
import ReactStrapAlerts from "./Components/ReactStrapAlerts";
import ReactBadge from "./Components/ReactBadge";

function App() {
  return (
    <div className="App">
      <h1>React 200 Start!</h1>
      <p>HTML 적용하기 </p>
      {/* <ImportComponent /> */}
      {/* <Es6 /> */}
      {/* <Variable />*/}
      {/* <SpreadOperator /> */}
      {/* <ForEach /> */}
      {/* <Map /> */}
      {/* <Props
        String="string"
        Number={123}
        Boolean={1 == 1}
        Array={[2, 4, 6]}
        Object_Json={{react: "리액트", twohundred: "200" }}
        Function={console.log("functionProps")}
      /> */}
      {/* <PropsObjVal Object_Json={{ name: "리액트", number: `${200}` }} /> */}
      {/* <PropsNode>
        <span> node from App.js</span>
      </PropsNode> */}
      {/* <Fragements /> */}
      {/* <ReactStrapAlerts /> */}
      <ReactBadge />
    </div>
  );
}

export default App;
