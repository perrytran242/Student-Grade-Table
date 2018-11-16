import React, { Component } from 'react';
import { connect } from 'react-redux';
import './delete_modal.css';

class DeleteModal extends Component {
    render(){
        return (
            <div className="basic-modal" onClick={this.close}>
                <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                    <div onClick={this.close} className="basic-modal-close">X</div>
                    <h1>Basic Modal Example</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugiat laboriosam quo? Ab officia tempore ratione id, modi possimus adipisci autem, inventore reiciendis facere nesciunt.</p>
                </div>
            </div>
        )
    }
}

export default DeleteModal;