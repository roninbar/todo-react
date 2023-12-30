import { useState } from 'react';

export default function Form({ onSubmit }) {
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [who, setWho] = useState('');

    function handleChangeWhat({ target: { value } }) {
        setWhat(value);
    }
    function handleChangeWhen({ target: { value } }) {
        setWhen(value);
    }
    function handleChangeWho({ target: { value } }) {
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
                <input type="text" name="what" id="what" value={what} onChange={handleChangeWhat} />
            </div>
            <br />
            <div>
                <label for="when">When: </label>
                <input type="date" name="when" id="when" value={when} onChange={handleChangeWhen} />
            </div>
            <br />
            <div>
                <label for="who">Who: </label>
                <input type="text" name="who" id="who" value={who} onChange={handleChangeWho} />
            </div>
            <br />
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
}