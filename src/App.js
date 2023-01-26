import "./style/App.css";
import Routes from "./components/app/routes";
import Footer from "./components/ui/footer";
import Logo from "./components/ui/logo";
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
