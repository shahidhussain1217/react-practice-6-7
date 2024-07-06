import logo from './logo.svg';
export default function Header(){
    return(
      <header className="App-header">
        <img src={logo} class="App-logo" alt="App Logo"></img>
          <p>
            I am learning Reactjs
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
    )
  }