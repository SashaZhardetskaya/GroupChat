import logo from './logo.svg';
import './App.css';
import { FcrUIScene } from 'fcr-ui-scene'
import {
  FcrChatroom,
  FcrBoardWidget,
  FcrPollingWidget,
  FcrStreamMediaPlayerWidget,
  FcrWebviewWidget,
  FcrCountdownWidget,
  FcrPopupQuizWidget
} from 'agora-plugin-gallery/scene'


function App() {
  const unmount = FcrUIScene.launch(document.querySelector("#root"), {
    appId: "Your App ID",
    region: "NA",
    userUuid: "user id",
    userName: "user name",
    roomUuid: "room id",
    roomType: 4, // Room type: 4 is for small classes, currently only small classes are supported.
    roomName: "room name",
    pretest: true, // Whether to enable pre-class equipment detection
    token: "rtm token", // In a test environment, you can use temporary RTM Token; in a production or security environment, it is strongly recommended that you use a server-generated RTM Token.
    language: "zh",
    duration: 60 * 30, // Course time in seconds.
    recordUrl: "your record url",
    roleType: 1, // User roles: 1 is teacher, 2 is student
    widgets: {
      easemobIM: FcrChatroom, // IM widget
      netlessBoard: FcrBoardWidget, // Interactive whiteboard widget
      poll: FcrPollingWidget, // Voter widget
      mediaPlayer: FcrStreamMediaPlayerWidget, // Video sync player widget
      webView: FcrWebviewWidget, // Embedded browser widget
      countdownTimer: FcrCountdownWidget, // Countdown widget
      popupQuiz: FcrPopupQuizWidget, // Clicker widget
    },
  });
  console.log(unmount)
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
