import {connect} from "react-redux";
import {getNewsAC} from "../../Redux/news_reducer";
import News from "./News";

export const mapStateToProps = (state) => {
  return {
    newsPage: state.newsPage
  }
}

export const mapDispatchToProps = (dispatch) => {
  dispatch(getNewsAC())
}

const newsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default newsContainer;
