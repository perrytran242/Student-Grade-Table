import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';


import './delete_modal.css';

class DeleteModal extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.props.closeModal} className="close-button">X</div>
                    <h1 className="text-danger text-center">Delete Student?</h1>
                    <p>Name: {this.props.studentData.name}</p>
                    <p>Course: {this.props.studentData.subject}</p>
                    <p>Grade: {this.props.studentData.grade}</p>
                    </div>
                </div>
        )
    }
}


export default connect(null, {
    closeModal: closeModal
})(DeleteModal);

