const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 0, message: 'Hello, tomorrow i am going on vacation', likes: 20},
        {id: 1, message: 'What is up?', likes: 4},
        {id: 2, message: 'Finally I started learning React', likes: 14},
        {id: 3, message: 'i likes a sleep', likes: 17}],
      newPostText: 'some text'
    },
    dialogsPage: {
      messages: [
        {id: 0, message: 'hi'},
        {id: 1, message: 'Yo'},
        {id: 2, message: 'I have a money'},
        {id: 3, message: 'i want you'},
        {id: 4, message: 'face palm22'},],
      newMessageText: 'some text for messages',
      dialogs: [
        {id: 0, name: 'Dimych'},
        {id: 1, name: 'Vera'},
        {id: 2, name: 'Yura'},
        {id: 3, name: 'Arina'},
        {id: 4, name: 'Sasha'}]
    },
    newsPage: {
      NewsItem: [
        {id: 0, test: "Путин умер от яда подмешанного своими родственниками"},
        {id: 1, test: "Людям стало лучше жить после..."},
        {id: 2, test: "В 2023г. Новый Призедент легализует Марихуану"},
        {id: 3, test: "Новый Президент РФ повысил всем своим гражданам заработную плату"},
      ]
    }
  }, //end _state
  _callSubscriber() {
    console.log('State change');
  },

  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action){ //мы отправляем в стор какой-то объект, action - object
    if(action.type === ADD_POST){
      // Создаём новый пост и прокидываем его в UL
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT){
      //То , что записанно в UL Текстареи мы изменяем в store._state.profilePage.newPostText
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
      //То , что записанно в UL Текстареи мы изменяем в store._state.dialogsPage.newMessageText
      this._state.dialogsPage.newMessageText = action.newTextDialog;
      this._callSubscriber(this._state)
    }
  }
}// End Store

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText : text
  }
}

export const updateNewMessageText = (text) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newTextDialog: text
  }
}
export default store;
window.store = store;