import "./stilos/App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BsCart2 } from "react-icons/bs";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Navbar onClick={() => console.log("la persona quiere ver el carrito")} />
      <main>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia
        quae illo enim at deserunt saepe voluptas. Similique, consequatur iure
        ad pariatur, molestiae facilis aspernatur iste esse facere hic minus.
      </main>
      <Footer />
    </div>
  );
}

export default App;
