import React from 'react';
import data from '../../../data/forum.json';
import Forum from './Forum';

const App = () => <Forum topics={data.topics} />;

export default App;
