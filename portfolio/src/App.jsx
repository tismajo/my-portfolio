import './styles/terminal.css';
import Terminal from './components/Terminal';
import MatrixBackground from './components/MatrixBackground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <MatrixBackground />
      <Terminal />
      <Footer />
    </div>
  );
}

export default App;
