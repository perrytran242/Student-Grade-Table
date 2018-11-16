import React, { Component, Fragment } from 'react';
import AddStudent from './add_student';
import DeleteModal from './delete_modal';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';


import { openDeleteModal } from '../actions';
import { closeDeleteModal } from '../actions';
import { getStudentList } from '../actions';
import { updateStudentInfo } from '../actions';
import { deleteStudent } from '../actions';


class StudentTable extends Component {
    componentDidMount() {
        this.props.getStudentList();
    }

    updateStudent(name, grade, subject, id) {
        const { updateStudentInfo, getStudentList } = this.props;

        updateStudentInfo(name, grade, subject, id);
        getStudentList(); 
    }

    removeStudent(id) {
        const { deleteStudent, getStudentList } = this.props;

        deleteStudent(id);
        getStudentList();
    }

    renderStudentList() {
        const { students, formState } = this.props;
        return Object.keys(students).map(key => {
            const { name, grade, subject } = students[key];
            
            return (
                <Fragment key={key}>
                    <tr>
                        <td>{name}</td>
                        <td>{subject}</td>
                        <td>{grade}</td>
                        <td>
                            <button onClick={() => this.props.openDeleteModal} className="btn btn-danger" type="button" >Delete</button>
                            {/* <button onClick={() => this.removeStudent(key)} type="button" className="btn btn-danger">Delete</button> */}
                        </td>
                        <td>
                            <button onClick={() => this.updateStudent(formState.name, formState.grade, formState.course, key)} type="button" className="btn btn-warning">Update</button>
                        </td>
                    </tr>
                </Fragment>
            )
        });
    }

    render() {
        console.log('PROPS:', this.props);
        const { students } = this.props; 
        if ( !students) {
            return <AddStudent/>;
        }

        if (this.props.deleteModalOpen) {
            return <DeleteModal/>
        }
        return (
            <div className="row">   
                <table className="my-2 table col-lg-8">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Student Name</th>
                            <th scope="col">Student Course</th>
                            <th scope="col">Student Grade</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
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
        formState: getFormValues('add-student')(state),
        deleteModalOpen: state.delete.isOpen
    }
}

export default connect(mapStateToProps, {
    getStudentList: getStudentList,
    updateStudentInfo: updateStudentInfo,
    deleteStudent: deleteStudent,
    openDeleteModal: openDeleteModal
})(StudentTable);