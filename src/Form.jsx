import { useState } from 'react';

export default function Form({ onSubmit }) {
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [who, setWho] = useState('');

    function onChangeWhat({ target: { value } }) {
        setWhat(value);
    }
    function onChangeWhen({ target: { value } }) {
        setWhen(value);
    }
    function onChangeWho({ target: { value } }) {
        setWho(value);
    }
    /**
     * @param {SubmitEvent} e 
     */
    function handleSubmit(e) {
        e.preventDefault();
        setWhat('');
        setWhen('');
        setWho('');
        onSubmit({ what, when, who });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="what">What: </label>
                <input type="text" name="what" id="what" value={what} onChange={onChangeWhat} />
            </div>
            <br />
            <div>
                <label for="when">When: </label>
                <input type="date" name="when" id="when" value={when} onChange={onChangeWhen} />
            </div>
            <br />
            <div>
                <label for="who">Who: </label>
                <input type="text" name="who" id="who" value={who} onChange={onChangeWho} />
            </div>
            <br />
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
}