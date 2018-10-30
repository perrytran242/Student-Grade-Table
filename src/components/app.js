import React from 'react';
import StudentAverage from './student_average';
import StudentTable from './student_table';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div className="container-fluid">
        <StudentAverage/>
        <StudentTable/>
    </div>
);

export default App;
