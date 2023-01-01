import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('h1', {id: 'heading1'}, 'Namaste Everyone!');
const elements = ReactDOM.createRoot(document.getElementById('elements'));
elements.render(header);