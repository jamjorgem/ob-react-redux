import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const TodoForm = ({ submit }) => {

    const newText = useRef();

    return (
        <div>
            <h2>create news TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText} />
                <button type='submit'>create</button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
