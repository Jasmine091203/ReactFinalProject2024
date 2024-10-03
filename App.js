import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterHome, { CombinedResultsLoader } from './components/RouterHome';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';

import UniversityDetail, { UniversityDetailLoader } from './components/UniversityDetail';
import UniversityPage, { UniversityLoader } from './components/UniversityPage';

import HighSchoolsDetail, { HighSchoolsDetailLoader } from './components/HighSchoolsDetail';
import HighSchoolsPage , { HighSchoolsLoader }from './components/HighSchoolsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <RouterHome />, loader: CombinedResultsLoader },
            { path: '/university', element: <UniversityPage />, loader: UniversityLoader },
            { path: '/university/:objectid', element: <UniversityDetail />, loader: UniversityDetailLoader },
            { path: '/highSchool', element: <HighSchoolsPage /> ,loader: HighSchoolsLoader},
            { path: '/highSchool/:objectid', element: <HighSchoolsDetail />, loader: HighSchoolsDetailLoader},
        ]
    }
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
