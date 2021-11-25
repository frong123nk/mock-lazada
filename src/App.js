import './App.css';
import {Header} from '../src/components/header/Header'
import {CardSlide} from '../src/components/CardSlide/CardSlide'
import {Tool} from '../src/components/Tool/Tool'
import {FlashSale} from '../src/components/FlashSale/FlashSale'
import {MostPopular} from '../src/components/MostPopular/MostPopular'

function App() {
  return (
    <div id="app-container">
      <Header/>
      <slide>
      <CardSlide/>
      </slide>
      <main>
        <Tool/>
        <FlashSale/>
        <MostPopular/>
      </main>
    </div>
  );
}

export default App;
