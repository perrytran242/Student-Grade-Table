import React, { Component, Fragment } from 'react';
import AddStudent from './add_student';
import DeleteModal from './delete_modal';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { getStudentInfo } from '../actions';
import { openModal } from '../actions';
import { getStudentList } from '../actions';
import { updateStudentInfo } from '../actions';
import { deleteStudent } from '../actions';


class StudentTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: null,
            id: null
        }
    }

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

    openDeleteModal(key, id) {
        this.props.openModal();
        this.setState({
            studentData: this.props.students[key],
            id
        });
    }

    renderStudentList() {
        const { students, inputValues } = this.props;
        return Object.keys(students).map(key => {
            const { name, grade, subject } = students[key];
            return (
                <Fragment key={key}>
                    <tr>
                        <td>{name}</td>
                        <td>{subject}</td>
                        <td>{grade}</td>
                        <td>
                            <button onClick={() => this.openDeleteModal(key, key)} className="btn btn-danger" type="button">Delete</button>
                        </td>
                        <td>
                            <button onClick={() => this.updateStudent(inputValues.name, inputValues.grade, inputValues.course, key)} type="button" className="btn btn-warning">Update</button>
                        </td>
                    </tr>
                </Fragment>
            )
        });
    }

    render() {
        const { students } = this.props; 

        if ( !students) {
            return <AddStudent/>;
        }  
        return (
            <div className="row">   
                <div>{this.props.isOpen ? <DeleteModal id={this.state.id} studentData={this.state.studentData} /> : null}</div>
                <table className="my-2 table col-lg-8 order-lg-1 order-sm-2 order-2">
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
        inputValues: getFormValues('add-student')(state),
        isOpen: state.delete.isOpen
    }
}


export default connect(mapStateToProps, {
    getStudentList: getStudentList,
    updateStudentInfo: updateStudentInfo,
    deleteStudent: deleteStudent,
    openModal: openModal,
    getStudentInfo: getStudentInfo
})(StudentTable);