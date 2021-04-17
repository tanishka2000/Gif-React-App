import React from 'react';
//axios for making api calls easily
import Random from './components/random_V1';
import Tag from './components/tag_V1';
import './App.css';
const App = () => (
    <div>
        <h1>Random GIF Application</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
    </div>
);

export default App; 