import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addStudent } from '../actions';
import { getStudentList } from '../actions';
import { timingSafeEqual } from 'crypto';

const noMargin = {
    margin: '0',
    color: 'red'
}

class AddStudent extends Component {
    addStudent = async (values) => {
        await this.props.addStudent(values.name, values.grade, values.course);
        this.props.getStudentList();
        this.props.reset();
    }    

    clearInputFields = (e) => {
        e.preventDefault();
        this.props.reset();
    }

    renderInput( { input, type, label, meta: { touched, error }} ) {
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
                 <input  placeholder={ label } className="d-block my-1 form-control" autoComplete="off" {...input} type={ type || "text"}/>    
                 <div className= {touched && error ? "container" : null}>
                    <p style={noMargin}>{ touched && error }</p>
                 </div>
            </div>
        )
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={()=>handleSubmit} className="form-group col-lg-4 order-lg-2 order-sm-1 order-xs-1">
                <h4>Add Student</h4>
                <Field label="Student Name" name="name" component={this.renderInput}/>
                <Field label="Student Course" name="course" component={this.renderInput}/>
                <Field label="Student Grade" name="grade" component={this.renderInput} type="number"/>
                <button onClick={handleSubmit(this.addStudent)} type="button" className="mr-2 btn btn-success">Add</button>
                <button onClick={this.clearInputFields}  className="btn btn-light">Cancel</button>
            </form>
        )
    }
}   

function validate(values) {
    const { name, course, grade } = values;
    const errors = {};
    if (!name) {
        errors.name = 'Please enter name'
    }
    if (!course) {
        errors.course = 'Please enter course'
    }
    if (!grade || !(/^[0-9]{1,3}$/i.test(grade)) ) {
       errors.grade = 'Invalid Number' 
    }
    return errors
}

AddStudent = reduxForm({
    form: 'add-student',
    validate: validate,
})(AddStudent);

export default connect(null, {
    addStudent: addStudent,
    getStudentList: getStudentList
})(AddStudent);

/^[0-9]{1,10}$/
