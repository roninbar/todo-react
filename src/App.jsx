import Form from './Form';
import Table from './Table';
import './App.css';
import { useState } from 'react';

function App() {
    const [items, setItems] = useState([]);

    function handleSubmit(item) {
        setItems([...items, item]);
    }

    return (
        <>
            <Form onSubmit={handleSubmit} />
            <br />
            <Table items={items} />
        </>
    );
}

export default App;
