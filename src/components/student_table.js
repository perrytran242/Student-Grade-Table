import React, { Component } from 'react';
import AddStudent from './add_student';

class StudentTable extends Component {
    render() {
        return (
            <div className="row">
                <table className="my-4 table col-lg-8">
                    <thead className="dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Student Course</th>
                            <th scope="col">Student Grade</th>
                        </tr>
                    </thead>
                </table>
            <AddStudent/>
            </div>
        )
    }
}

export default StudentTable;