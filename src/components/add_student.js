import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddStudent extends Component {
    renderInput() {
        return (
            <input type="text"/>
        )
    }
    render() {
        console.log(this.props);
    
        return (
            <div className="col-lg-right float-right">
                <Field name="Student Name" component={this.renderInput}/>
            </div>
        )
    }
}

AddStudent = reduxForm({
    form: 'add-student',
})(AddStudent);

export default AddStudent;