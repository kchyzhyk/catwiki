import './App.css';
import {ReactComponent as Logo} from '../src/css/img/logo.svg'
import IntroLogo from '../src/css/img/logo-white.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
          <header className="App-header">
              <a href="/">
                  <Logo />
              </a>
          </header>
              <div className="intro">
                  <img src={IntroLogo} alt="" className="whiteLogo" />
                  <div className="introText">
                      Get to know more about your <br/> cat breed
                  </div>
              </div>
      </div>
    </div>
  );
}

export default App;
