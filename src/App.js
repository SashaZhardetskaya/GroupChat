import logo from './logo.svg';
import './App.css';
import { FcrUIScene } from 'fcr-ui-scene'
import { RtmTokenBuilder } from 'agora-token';
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
  const token = RtmTokenBuilder.buildToken(
    '4e8308c48bee4bf58eb771839db26551',
    '56ca6120fa124c118792a6998aaba457',
    '1234',
    0,
  );
  const unmount = FcrUIScene.launch(document.querySelector("#root"), {
    appId: '4e8308c48bee4bf58eb771839db26551',
    // region: AgoraRegion.EU,
    // @ts-ignore
    region: 'EU',
    userUuid: '1234',
    userName: 'user name',
    roomUuid: 'room7',
    roomType: 4, // Room type: 4 is for small classes, currently only small classes are supported.
    roomName: 'room7 name',
    devicePretest: true, // Whether to enable pre-class equipment detection
    // token: '006329e02efa56748799b519bbd456f1a81IAA5ME5w3vZoxZrC+6adrFpoWYtMCD+1OSKq/2EMeFJgyUblcoaj4OObIgDaZeIEoIBPZgQAAQBwdU5mAgBwdU5mAwBwdU5mBABwdU5m',
    token: token,
    language: 'en',
    duration: 60 * 30, // Course time in seconds.
    roleType: 2, // User roles: 1 is teacher, 2 is student
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
