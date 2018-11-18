import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudentInfo } from '../actions';


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
    handleChange(event) {

    }

    render() {
        console.log("PROPS IN EDIT MODAL:", this.props);
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <h3 className="alert alert-info text-dark text-center" role="alert">Edit Student</h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <input onChange={} value={this.props.studentData.name} placeholder="Student Name" type="text" className="d-block my-1 form-control" autoComplete="off"/>
                        </div>
                        <div className="input-group mb-3">
                            <input value={this.props.studentData.subject} placeholder="Student Course" type="text" className="d-block my-1 form-control"/>
                        </div>
                        <div className="input-group mb-3">
                            <input value={this.props.studentData.grade} placeholder="Student Grade" type="text" className="d-block my-1 form-control"/>
                        </div>
                    </form>
                    <div className="text-center">
                        <button className="btn">Save</button>
                        <button onClick={this.props.closeModal} type="button" className="btn btn-light">Cancel</button>
                    </div>
                    </div>
                </div>
        )
    }
}

export default connect(null, {
    updateStudentInfo: updateStudentInfo
})(EditModal);