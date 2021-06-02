const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT';

/* одноразовый объект, в случае, если state не придёт в
profileReducer пользуемся им */
let initialState = {
  messages: [
    {id: 0, message: 'hi'},
    {id: 1, message: 'Yo'},
    {id: 2, message: 'I have a money'},
    {id: 3, message: 'i want you'},
    {id: 4, message: 'face palm22'},],
  newMessageText: '  ',
  dialogs: [
    {id: 0, name: 'Dimych'},
    {id: 1, name: 'Vera'},
    {id: 2, name: 'Yura'},
    {id: 3, name: 'Arina'},
    {id: 4, name: 'Sasha'}]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type){
    case SEND_MESSAGE_TEXT:
      //То , что записанно в UL Текстареи мы изменяем в store._state.dialogsPage.newMessageText
      let newMessage = {
        id: 5,
        message: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText : ''
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      //То , что записанно в UL Текстареи мы изменяем в store._state.dialogsPage.newMessageText
      return {
        ...state,
        newMessageText: action.newTextDialog
      }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: 'SEND_MESSAGE_TEXT'});
export const updateNewMessageTextCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newTextDialog: text});

export default dialogsReducer;