import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentInfo } from '../actions';
import { getStudentList } from '../actions';

import './edit_modal.css';

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentCourse: '',
            studentGrade: '',
        }
    }

    updateStudentData = () => {
        const { updateStudentInfo, _id, getStudentList, closeModal } = this.props;
        const { studentName, studentCourse, studentGrade } = this.state;

        updateStudentInfo(studentName, studentGrade, studentCourse, _id);
        getStudentList();
        closeModal();
    }

    componentDidMount() {
        this.setState({
            studentName: this.props.studentData.name,
            studentCourse: this.props.studentData.subject,
            studentGrade: this.props.studentData.grade
        });
    }

    handleChangeStudent = (event) => {
        this.setState({
            studentName: event.target.value,
        });
    }

    handleChangeCourse = (event) => {
        this.setState({
            studentCourse: event.target.value,
        });
    }

    handleChangeGrade = (event) => {
        this.setState({
            studentGrade: event.target.value
        });
    }

    render() {
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <h3 className="alert alert-info text-dark text-center" role="alert">Edit Student</h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <input value={this.state.studentName} onChange={this.handleChangeStudent} placeholder="Student Name" type="text" className="d-block my-1 form-control" autoComplete="off"/>
                        </div>
                        <div className="input-group mb-3">
                            <input value={this.state.studentCourse} onChange={this.handleChangeCourse} placeholder="Student Course" type="text" className="d-block my-1 form-control"/>
                        </div>
                        <div className="input-group mb-3">
                            <input value={this.state.studentGrade} onChange={this.handleChangeGrade} placeholder="Student Grade" type="text" className="d-block my-1 form-control"/>
                        </div>
                    </form>
                    <div className="text-center">
                        <button onClick={this.updateStudentData} className="btn btn-success">Save</button>
                        <button onClick={this.props.closeModal} type="button" className="btn btn-light">Cancel</button>
                    </div>
                    </div>
                </div>
        )
    }
}

export default connect(null, {
    updateStudentInfo: updateStudentInfo,
    getStudentList: getStudentList
})(EditModal);