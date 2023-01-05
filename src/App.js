import "./style/App.css";
import Routes from "./components/App/Routes";
// import NavBar from "./components/App/NavBar";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <div className='App'>
        {/* <NavBar /> */}
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
