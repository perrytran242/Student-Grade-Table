import React, { Component, Fragment } from 'react';
import AddStudent from './add_student';
import { connect } from 'react-redux';
import { getStudentList } from '../actions';

class StudentTable extends Component {
    componentDidMount() {
        this.props.getStudentList();
    }
    renderStudentList() {
        const { students } = this.props;

        return Object.keys(students).map(key => {
            const { name, grade, subject } = students[key];
            return (
                <Fragment key={key}>
                    <tr>
                        <td>{name}</td>
                        <td>{subject}</td>
                        <td>{grade}</td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </Fragment>
            )
        });
    }
    render() {
        const { students } = this.props; 
        if ( !students) {
            return null;
        }
        return (
            <div className="row">   
                <table className="my-2 table col-lg-8">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Student Name</th>
                            <th scope="col">Student Course</th>
                            <th scope="col">Student Grade</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderStudentList()}
                    </tbody>
                </table>

                <AddStudent/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students.studentList,
    }
}

export default connect(mapStateToProps, {
    getStudentList: getStudentList
})(StudentTable);