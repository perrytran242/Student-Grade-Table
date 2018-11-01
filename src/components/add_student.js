import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class AddStudent extends Component {
        
    renderInput( { input, type, label } ) {
        const faUser = {
            position: 'relative',
            height: '38px',
            width: '40px',
            top: '4px',
        }

        const faBook = {
            position: 'relative',
            height: '38px',
            width: '40px',
            top: '4px'
        }

        const faGraduation = {
            position: 'relative',
            height: '38px',
            width: '40px',
            top: '4px'
        }
        const checkLabelInput = () => {
            if ( label === "Student Name") {
                return  <span style={faUser} className="input-group-text"><i className="fas fa-user"></i></span>
            } else if ( label === "Student Course") {
                return  <span style={faBook} className="input-group-text"><i className="fas fa-book-open"></i></span>
            } else if ( label === "Student Grade") {
                return <span style={faGraduation} className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            }
        }
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  {checkLabelInput()}
                </div> 
                <input placeholder={ label } className="my-1 form-control" autoComplete="off" {...input} type={ type || "text"}/>    
            </div>

        )
    }
    render() {
        return (
            <form className="col-lg-4" >
                <div className="form-group">
                    <h4>Add Student</h4>
                    <Field label="Student Name" name="Student Name" component={this.renderInput}/>
                    <Field label="Student Course" name="Student Course" component={this.renderInput}/>
                    <Field label="Student Grade" name="Student Grade" component={this.renderInput} type="number"/>
                    <button type="button" className="mx-2 btn btn-success">Add</button>
                    <button type="button" className="mx-2 btn btn-light">Cancel</button>
                    <button type="button" className="mx-2 btn btn-info">Get Data From Server</button>
                </div>
            </form>

        )
    }
}

AddStudent = reduxForm({
    form: 'add-student',
})(AddStudent);

export default AddStudent;