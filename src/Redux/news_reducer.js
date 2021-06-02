const GET_NEWS = 'GET-NEWS';


const initState = {
  NewsItems: [
    {id: 0, newsItem: "Путин умер от яда подмешанного своими родственниками"},
    {id: 1, newsItem: "Людям стало лучше жить после..."},
    {id: 2, newsItem: "В 2023г. Новый Призедент легализует Марихуану"},
    {id: 3, newsItem: "Новый Президент РФ повысил всем своим гражданам заработную плату"},
  ],
  NewsItem2 : [
    {id: 0, newsItem2: "Руками убийцы был уничтожен особо опасный преступник"},
    {id: 1, newsItem2: "Рубка мяса убивает айфон"},
  ]
}

const newsReducer = (state = initState, action) => {
  switch (action.type){
    case GET_NEWS:
      return {
        ...state,
        NewsItem: [...state.NewsItems],
        NewsItem2: [...state.NewsItem2]
      }
    default:
      return state;
  }
}

export const getNewsAC = () => {
  return { type: GET_NEWS }
}

export default newsReducer;