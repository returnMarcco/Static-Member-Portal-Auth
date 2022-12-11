import React from 'react';
import { Divider, Form, Label, Button } from 'semantic-ui-react';
import articleImg from '../article.png';

const ArticleForm = () => {
    return (
        <Form>
        <img className='article-img' src={articleImg} alt='question_mark'></img>
        <h3>Title</h3>
        <div className='select-form'>
            <Form.Field>
            <input type='text' placeholder='Title of your article.' />
            </Form.Field>
            <Form.Field label={<h3>Abstract</h3>} placeholder='Please enter a 1 paragraph abstract' control='textarea' rows='4'/>
            <Form.Field label={<h3>Article Text</h3>} placeholder='Enter your article content...' control='textarea' rows='24'/>
            <Form.Field label={<h3>Tags</h3>} placeholder='Please enter any relevant #hashtags...' control='textarea' rows='1'/>
            <Button color='yellow'>Post Article</Button>
        </div>
     </Form>
    );
}

export default ArticleForm;