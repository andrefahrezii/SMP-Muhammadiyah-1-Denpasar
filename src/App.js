// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './views/home';
// import Register from './views/register';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path='/register' Component={Home} />
//           <Route path='/register' Component={Register} />
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
