import React, { Component } from 'react';

class StudentAverage extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="d-none d-md-block border-bottom my-3 col-lg-12">Student Grade Table
                    <small className="float-right">Grade Average <span className="badge badge-secondary">0</span></small>
                </h1>

                <h3 className="d-md-none border-bottom my-3 col-lg-12">Student Grade Table
                    <small className="float-right">Grade Average <span className="badge badge-secondary">0</span></small>
                </h3>
                
            </div>
        )
    }
}

export default StudentAverage;