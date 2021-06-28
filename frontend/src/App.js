/* 
We'll need a Navbar in here to connect to the main Roboflow page, and other pages.
*/

// CSS Styling
import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Home />
    </div>
  );
}

export default App;
