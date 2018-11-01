import React, { Component, Fragment } from 'react';
import AddStudent from './add_student';
import { connect } from 'react-redux';
import { getStudentList } from '../actions';

class StudentTable extends Component {
    componentDidMount() {
        this.props.getStudentList();
    }
    // renderStudentList() {
    //     const { students } = this.props;

    //     return students.map( (student) => {
    //         return (
    //             <Fragment key={student.id}>
    //                 <tr>
    //                     <th>{student.name}</th>
    //                     <th>{student.course}</th>
    //                     <th>{student.grade}</th>
    //                     <th>
    //                         <button type="button" className="btn btn-danger">Delete</button>
    //                     </th>
    //                 </tr>
    //             </Fragment>
    //         )
    //     });
    // }
    render() {
        const { students } = this.props;
        console.log("STUDENTS:", students);
        if (!students) {
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
                        {/* {this.renderStudentList()} */}
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