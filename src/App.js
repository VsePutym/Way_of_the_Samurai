import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import NewContainer from "./components/News/NewContainer";
import SettingsContainer from './components/Settings/SettingsContainer'

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <HeaderInfo/>
        <Nav/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/profile' render={() => <Profile />}/>
          <Route path='/news' render={() => <NewContainer />}/>
          <Route path ='/users' render={() => <UsersContainer />} />
          <Route path='/music' component={Music}/>
          <Route path='/settings' render={() => <SettingsContainer />} />
          <Route path='/photos' component={Photos}/>
        </div>
      </div>
  );
}

export default App;
