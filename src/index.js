import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { setToLS } from './utils/storage';

import * as themes from './theme/schema.json';

//primereact css
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

//icons
import 'primeicons/primeicons.css';

// primeflex
import 'primeflex/primeflex.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store themes in localStorage
setToLS('all-themes', themes.default);

root.render(<App />);
