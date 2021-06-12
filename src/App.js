import "./App.css";
import Button from "@material-ui/core/Button";
import Todo from './To-do/to-do';

function App() {
  //onlicks
  const onClickLinkBot = (e) => {
    e.preventDefault();
    window.location = "https://fervent-noyce-f7844a.netlify.app/";
  };

  const onClickCounter = (e) => {
    e.preventDefault();
    window.location = "https://counterthatkeepsoncounting.netlify.app/";
  };

  const onClickFolio = (e) => {
    e.preventDefault();
    window.location = "https://upbeat-shirley-6f5013.netlify.app/";
  };

  const onClickYoutube = (e) => {
    e.preventDefault();
    window.location = "https://youtube.com/";
  };

  const onClickSamurai = (e) => {
    e.preventDefault();
    window.location = "https://www.samuraioflegend.com/";
  };

  const onClickGoogle = (e) => {
    e.preventDefault();
    window.location = "https://google.com/";
  };

  const onClickStack = (e) => {
    e.preventDefault();
    window.location = "https://stackoverflow.com/";
  };

  return (
    <div className="App">
      <div className='middle-box'>
        <div className='middle-middle-box'>
          <Todo/>
        </div>
      </div>
      <div className="shortcut-container">
        <br />
        <div className="button-container">
          <Button
            className="button"
            onClick={onClickLinkBot}
            variant="contained"
            color="secondary"
            size="large"
          >
            Link Bot
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickCounter}
            variant="contained"
            color="secondary"
            size="large"
          >
            Counter Game
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickFolio}
            variant="contained"
            color="secondary"
            size="large"
          >
            Folio Site
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickYoutube}
            variant="contained"
            color="secondary"
            size="large"
          >
            Watch Youtube
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickSamurai}
            variant="contained"
            color="secondary"
            size="large"
          >
            Samurai Legend
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickGoogle}
            variant="contained"
            color="secondary"
            size="large"
          >
            Google Stuff
          </Button>
          <p>{/* for some reason br wont work so I'm doing this instead */}</p>
          <Button
            className="button"
            onClick={onClickStack}
            variant="contained"
            color="secondary"
            size="large"
          >
            Stack Overflow
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
