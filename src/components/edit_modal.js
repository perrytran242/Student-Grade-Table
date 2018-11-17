import React, { Component } from 'react';

import './edit_modal.css';

class EditModal extends Component {
    render() {
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
                        <button onClick={() => this.deleteCurrentStudent(id)} type="button" className="btn btn-danger">Delete</button>
                        <button onClick={this.props.closeModal} type="button" className="btn btn-light">Cancel</button>
                    </div>
                    </div>
                </div>
        )
    }
}

export default EditModal;