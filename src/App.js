import './App.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Navbar } from './component/navbar/navbar'
import Main from './component/main/main'
import Card from './component/card/card'
import Footer from './component/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
