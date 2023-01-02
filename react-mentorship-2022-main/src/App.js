import React from 'react';
import index from './index.css';

import { Standings, Statistics, Fixtures, TeamDetails } from './Pages';
import Navbar from './Components/Navbar/Index';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<Fixtures />} />
                    <Route exact path={'/standings'} element={<Standings />} />
                    <Route
                        exact
                        path={'/teamdetails'}
                        element={<TeamDetails />}
                    />
                    <Route
                        exact
                        path={'/statistics'}
                        element={<Statistics />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
