import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';
import { getFormValues, formValueSelector } from 'redux-form';


import './delete_modal.css';

class DeleteModal extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.props.closeModal} className="close-button">X</div>
                    <h1 className="text-danger text-center">Delete Student?</h1>
    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat laboriosam quo? Ab officia tempore ratione id, modi possimus adipisci autem, inventore reiciendis facere nesciunt.
                    </p>
                    <p>{this.props.studentData.name}</p>
                    <p>{this.props.studentData.subject}</p>
                    <p>{this.props.studentData.grade}</p>
                    </div>
                </div>
        )
    }
}



export default connect(null, {
    closeModal: closeModal
})(DeleteModal);

