import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageTextCreator: (body) => {
      //меняем value textarea для BLL
      dispatch(updateNewMessageTextCreator(body))
    },
    sendMessage: () => {
      //Добовляем сообщение
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );

export default DialogsContainer;