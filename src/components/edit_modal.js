import React, { Component } from 'react';

import './edit_modal.css';

class EditModal extends Component {
    render() {
        console.log("PROPS IN EDIT MODAL:", this.props);
        return (
            <div className="basic-modal" onClick={this.props.closeModal}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.props.closeModal} className="close-button">X</div>
                    <h1 className="text-danger text-center">Delete Student?</h1>
                    <div className="text-center">
                        <button onClick={this.props.closeModal} type="button" className="btn btn-light">Cancel</button>
                    </div>
                    </div>
                </div>
        )
    }
}

export default EditModal;