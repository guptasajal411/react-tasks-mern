import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Routes from "./Routes";

function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  return (
    <div className="App">
      <Routes colors={colors} />
    </div>
  );
}

export default App;