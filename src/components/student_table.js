import React, { Component } from 'react';
import AddStudent from './add_student';

class StudentTable extends Component {
    render() {
        return (
            <div className="row">
                <table className="table col-lg-8">
                    <thead className="dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                </table>
            <AddStudent/>
            </div>
        )
    }
}

export default StudentTable;