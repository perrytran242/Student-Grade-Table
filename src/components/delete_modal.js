import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDeleteModal } from '../actions';
import { getFormValues, formValueSelector } from 'redux-form';


import './delete_modal.css';

class DeleteModal extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="basic-modal" onClick={this.props.closeDeleteModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.props.closeDeleteModal} className="close-button">X</div>
                    <h1 className="text-danger text-center">Delete Student?</h1>
    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat laboriosam quo? Ab officia tempore ratione id, modi possimus adipisci autem, inventore reiciendis facere nesciunt.
                    </p>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        formValues: getFormValues('add-student')(state)
    }
}


export default connect(mapStateToProps, {
    closeDeleteModal: closeDeleteModal
})(DeleteModal);

