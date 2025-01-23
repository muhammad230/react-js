import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About Text" />

      <div className="container my-3">
        <TextForm heading="Enter a text" />
      </div>
    </>
  );
}

export default App;
