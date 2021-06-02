const News = (props) => {

  const NewsPage2 = props.newsPage.NewsItem2.map(n2 => {
    return (
      <div key={n2.id} newsItem2={n2.newsItem2}>
        {n2.newsItem2}
      </div>
    )
  })

  const NewsPage = props.newsPage.NewsItem.map(n => {
    return(
      <div key={n.id} newsItem={n.newsItem}>
        {n.newsItem}
      </div>
    )
  })
  return (
   <div>
     {NewsPage}
     {NewsPage2}
   </div>
  )
}

export default News;