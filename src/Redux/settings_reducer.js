const SETTINGS = 'SETTINGS';

const initialState ={
  settings: [
    {id: 0, setting: 'profile'},
    {id: 1, setting: 'Network'},
    {id: 2, setting: 'profile'},
    {id: 3, setting: 'profile'}
  ]
}

const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case SETTINGS :
      return {
        ...state,
        settings: [...state.settings]
      }
    default:
      return {
        state
      }
  }
}

export const getSettingsAC = () => {
  return {
    type: SETTINGS
  }
}

export default profileReducer;