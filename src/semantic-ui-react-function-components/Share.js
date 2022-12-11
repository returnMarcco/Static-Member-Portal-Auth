import React from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'

const Ask = () => (
    <Form>
        <div className='ask-label'>
            <Form.Field>
            <input type='text' placeholder='Title of your post...' />
            <Label pointing>Please enter a value</Label>
            </Form.Field>
        </div>
    </Form>

)

export default Ask