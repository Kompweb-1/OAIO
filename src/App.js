import "./style/App.css";
import Routes from "./Components/App/Routes";
import Footer from "./Components/UI/Footer";
import Logo from "./Components/UI/Logo";
// import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <div className='app-header'>
        <Logo />
      </div>
      <div className='app-body'>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
