import React, {useState} from "react";
import Article from "./article/Article";
import AddArticle from "./addArticle/AddArticle";
import {connect} from "react-redux"
import * as actionTypes from "../store/actionTypes";
import {addArticle, simulateHttpRequest} from "../store/actionCreators";

const Articles = ({articles, saveArticle}) => (
    // const [articles, saveArticle] = useState([
    //     {id: 1, title: "post 1", body: "article post 1"},
    //     {id: 2, title: "post 2", body: "article post 2"}
    // ]);
    // const saveArticle = e => {
    //     e.preventDefault()
    //     // the logic will be updated later
    // }

    // return (
    <div>
        <AddArticle saveArticle={saveArticle}/>
        {articles.map(article => (
            <Article key={article.id} article={article}/>
        ))}
    </div>
    // );
)
const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveArticle: article =>
            dispatch(simulateHttpRequest(article)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
