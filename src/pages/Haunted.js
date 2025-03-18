import haunted from './../media/IMG_0640.jpg';

export default function Haunted() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={haunted} alt="A ghostly scene. Not redundant ok compiler?" style={{maxWidth: "100%", height: "auto"}} />
    </header>
      <footer className="App-footer">
         Disclaimer: Ghosts on Grounds is not sponsored or affiliated in any way with the University of Virginia.
      </footer>
    </div>
  );
}
