import s from './News.module.css';
import {NavLink} from "react-router-dom";

let NewsItem = (props) => {
  let path = "/news" + props.id;
  return (
    <div><NavLink to={path}>{props.test}</NavLink></div>
  );
}

const News = (props) => {
  let NewsElement = props.state.NewsItem.map((d,i) => <NewsItem key={i} id={d.id} test={d.test}/>)
  return (
    <div>
      {NewsElement}
    </div>
  );
}

export default News;