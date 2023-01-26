import "./style/App.css";
import Routes from "./components/App/Routes";
import Footer from "./components/UI/Footer";
import Logo from "./components/UI/logo";
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
