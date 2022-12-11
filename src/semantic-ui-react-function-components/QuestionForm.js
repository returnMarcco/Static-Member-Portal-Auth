import React from 'react'
import { Divider, Form, Label, Button } from 'semantic-ui-react'
import qMark from '../qmark.png'
import '../Components.css'

const QuestionForm = () => {
    return (
        <Form>
            <img className='q-mark' src={qMark} alt='question_mark'></img>
            <h3>Title</h3>
            <div className='select-form'>
                <Form.Field>
                <input type='text' placeholder='Title of your inquiry...' />
                </Form.Field>
                <Form.Field label={<h3>Describe your issue</h3>} placeholder='Issue description...' control='textarea' rows='12'/>
                <Form.Field label={<h3>Tags</h3>} placeholder='Please enter any relevant #hashtags...' control='textarea' rows='1'/>
                <Button color='yellow'>Post Question</Button>
            </div>
     </Form>
    )
}

export default QuestionForm;
