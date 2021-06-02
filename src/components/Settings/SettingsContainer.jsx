import Settings from "./Settings";
import {connect} from "react-redux";
import {getSettingsAC} from "../../Redux/settings_reducer";

const mapStateToProps = (state) => {
  debugger
  return {
    settingsPage: state.settingsPage.state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettings: () => {
      dispatch(getSettingsAC())
    }
  }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;