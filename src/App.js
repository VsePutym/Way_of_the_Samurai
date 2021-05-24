import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import {Route} from "react-router-dom";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <HeaderInfo/>
        <Nav/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/news' render={() => <News state={props.state.newsPage}/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/photos' component={Photos}/>
        </div>
      </div>
  );
}

export default App;
