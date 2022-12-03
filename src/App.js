import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import Body from './components/Body'


function App() {
  return (
    <Body>
      <Header />
      <Outlet />
    </Body>
  );
}

export default App;
