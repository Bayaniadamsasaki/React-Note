import React from 'react';
import Note from './components/note';
import { createRoot } from "react-dom/client";

import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Note />);