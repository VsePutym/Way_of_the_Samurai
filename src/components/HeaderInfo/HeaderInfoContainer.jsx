import React from "react";
import HeaderInfo from "./HeaderInfo";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth_reducer";
import {HeaderInfoAPI} from "../../api/api";

class HeaderInfoContainer extends React.Component {

  componentDidMount(){
    HeaderInfoAPI.getLogIn()
      .then(data => {
      if(data.resultCode === 0){
        let {id, email, login} = data.data
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <HeaderInfo {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderInfoContainer);