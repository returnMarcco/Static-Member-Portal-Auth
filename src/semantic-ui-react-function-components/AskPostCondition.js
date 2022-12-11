import React from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';


const AskPostCondition = (props)  => {
    const askOrPost = props.askOrPost;
    if (askOrPost === 'Question') {
        return <QuestionForm />;
        
    } else if (askOrPost === 'Article') {
        return <ArticleForm />;
        
    }
}

export default AskPostCondition;