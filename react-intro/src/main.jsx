import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const content = null;

//Create a "React root" out of the `#root` elemment
//then render the React element at that root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content)
