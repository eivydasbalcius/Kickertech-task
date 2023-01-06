import "./styles/Desktop.css";
import "./styles/Tablet.css";
import "./styles/Mobile.css";
import "./styles/MobileHeader.css";
import Header from "./components/Header";
import Product from "./components/Product";
import MobileHeader from "./components/MobileHeader";

function App() {
  return (
    <div>
      <Header/>
      <MobileHeader/>
      <body>
        <div class="position">
        <Product />
        <Product />
        <Product />
        </div>
      </body>
    </div>
  );
}
export default App;
