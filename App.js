import './App.css';
import { arr } from './data.js';
import  Header from './Header.jsx';
import  CoreConcepts from './Core_concepts.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <h3>Lets Get Started</h3>
      <section class="core-concept">
        <div class="container">
        <ul class="horizontal-list">
        <CoreConcepts
        image={arr[0].image}
          title={arr[0].title}
          Discription={arr[0].discription} />
           
            <CoreConcepts
               image={arr[1].image}
               title={arr[1].title}
               Discription={arr[1].discription} />
           
            <CoreConcepts
               image={arr[2].image}
               title={arr[2].title}
               Discription={arr[2].discription} />
           
            <CoreConcepts
               image={arr[3].image}
               title={arr[3].title}
               Discription={arr[3].discription} />
           
           
        </ul>
        </div>
      </section>

    </div>
  );
}

export default App;
