import "./style/App.css";
import Routes from "./components/App/Routes";
import Footer from "./components/ui/Footer";
import Logo from "./components/ui/Logo";
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
