const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

/* одноразовый объект, в случае, если state не придёт в
profileReducer пользуемся им */
let initialState = {
  posts: [
    {id: 0, message: 'Hello, tomorrow i am going on vacation', likes: 20},
    {id: 1, message: 'What is up?', likes: 4},
    {id: 2, message: 'Finally I started learning React', likes: 14},
    {id: 3, message: 'i likes a sleep', likes: 17}],
  newPostText: '',
  profile: null
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newTextPost : text});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export default profileReducer;