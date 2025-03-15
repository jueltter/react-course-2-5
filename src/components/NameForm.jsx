import React, { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Type yout name here'
                value={name} onChange={handleChange} />
                <p>Hello, {name || 'stanger'}</p>
        </div>
    );
};

export default NameForm;