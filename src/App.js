import { CssBaseline } from '@material-ui/core'
// import logo from './logo.svg';
import BlogList from './pages/blogs/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <BlogList />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
