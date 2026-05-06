import Navbar from './components/Navbar';
import FruitSlider from './components/FruitSlider';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden', background: '#000' }}>
      <Navbar />
      <FruitSlider />
    </div>
  );
};

export default App;