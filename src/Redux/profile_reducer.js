const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

/* одноразовый объект, в случае, если state не придёт в
profileReducer пользуемся им */
let initialState = {
  posts: [
    {id: 0, message: 'Hello, tomorrow i am going on vacation', likes: 20},
    {id: 1, message: 'What is up?', likes: 4},
    {id: 2, message: 'Finally I started learning React', likes: 14},
    {id: 3, message: 'i likes a sleep', likes: 17}],
  newPostText: ''
}

const profileReducer = (state =initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // Создаём новый пост и прокидываем его в UL
      let newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText : ''
      }
    case UPDATE_NEW_POST_TEXT:
      //То , что записанно в UL Текстареи мы изменяем в store._state.profilePage.newPostText
      return {
        ...state,
        newPostText: action.newTextPost
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newTextPost : text});

export default profileReducer;