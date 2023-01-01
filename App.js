import React from 'react';
import ReactDOM from 'react-dom/client';


const TestFn = () => (
    <h1>Namaste React</h1>
)

const elements = ReactDOM.createRoot(document.getElementById('app'));
elements.render(<TestFn/>);