import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { setToLS } from './utils/storage';

import * as themes from './theme/schema.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
setToLS('all-themes', themes.default);
root.render(<App />);
