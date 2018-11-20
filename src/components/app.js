import React from 'react';
import StudentAverage from './student_average';
import StudentTable from './student_table';
import '../assets/css/app.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div className="container">
        <StudentAverage/>
        <StudentTable/>
    </div>
);

export default App;
