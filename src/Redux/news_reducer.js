const GET_NEWS = 'GET-NEWS';


const initState = {
  NewsItems: [
    {id: 0, newsItem: "Ввышел 3 сезон Рика и Морти"},
    {id: 1, newsItem: "Неуязвимый удался, дата выхода нового сезона - 1 ый квартал 2021..."},
    {id: 2, newsItem: "В 2023г. Новый Призедент легализует Марихуану"},
    {id: 3, newsItem: "React, ты лучший"},
  ],
  NewsItem2 : [
    {id: 0, newsItem2: "Фильм Мортал комбат , 2-ая часть выходит через месяц"},
    {id: 1, newsItem2: "Всякая дичь из деревни кукуева, репортаж НТВ"},
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