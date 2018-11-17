import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';
import { deleteStudent } from '../actions';
import { getStudentList } from '../actions';

import './delete_modal.css';

class DeleteModal extends Component {

    deleteCurrentStudent = (id) => {
        this.props.deleteStudent(id);
        this.props.closeModal();
        this.props.getStudentList();
    }
    render() {
        const { id } = this.props;
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.props.closeModal} className="close-button">X</div>
                    <h1 className="text-danger text-center">Delete Student?</h1>
                    <div className="text-center student-info">
                        <h3>Would you like to delete this student?</h3>
                        <p>Name: {this.props.studentData.name}</p>
                        <p>Course: {this.props.studentData.subject}</p>
                        <p>Grade: {this.props.studentData.grade}</p>
                    </div>  
                    <div className="text-center">
                        <button onClick={() => this.deleteCurrentStudent(id)} type="button" className="mr-3 btn btn-danger">Delete</button>
                        <button onClick={this.props.closeModal} type="button" className="btn btn-light">Cancel</button>
                    </div>
                    </div>
                </div>
        )
    }
}


export default connect(null, {
    closeModal: closeModal,
    deleteStudent: deleteStudent,
    getStudentList: getStudentList
})(DeleteModal);

