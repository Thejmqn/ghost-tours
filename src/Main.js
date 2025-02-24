import logo from './logo.svg';
import ghost from './ghost.png';
import './App.css';

export default function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height: "16vh"}} className="App-logo" alt="logo" />
        <p>
          Explore the Haunted Grounds of Mr. Jefferson's University
        </p>
        <p style={{color: "darkred", size: "4vh"}}>
          <a style={{textDecoration: "none"}} href="/haunted">Every place is haunted.</a>
        </p>
        <img src={ghost} style={{height: "20vh"}} className="Ghost-image" alt="A ghost" />
      </header>
      <footer className="App-footer">
         Disclaimer: Ghosts on Grounds is not sponsored or affiliated in any way with the University of Virginia.
      </footer>
    </div>
  );
}
