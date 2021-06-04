import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Music from "./components/Music/Music";
import Photos from "./components/Photos/Photos";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import NewContainer from "./components/News/NewContainer";
import SettingsContainer from './components/Settings/SettingsContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderInfoContainer from "./components/HeaderInfo/HeaderInfoContainer";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <HeaderInfoContainer />
        <Nav/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
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
