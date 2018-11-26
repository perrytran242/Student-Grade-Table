import React, { Component, Fragment } from 'react';
import AddStudent from './add_student';
import DeleteModal from './delete_modal';
import EditModal from './edit_modal';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

import { getGradeAverage } from '../actions';
import { getStudentInfo } from '../actions';
import { openModal } from '../actions';
import { getStudentList } from '../actions';
import { updateStudentInfo } from '../actions';
import { deleteStudent } from '../actions';


class StudentTable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            studentData: null,
            id: null,
            editModalOpen: false,
            length: 15,
            showMore: false,
            mediaQuery300: 0,
        }
    }

    showMore = (e) => {
        e.preventDefault();
        this.setState({
            showMore: true,
        });
    }
    openEditModal = (studentData, id) => {
        this.setState({
            editModalOpen: true,
            studentData,
            id
        });
    }

    closeEditModal = () => this.setState({editModalOpen: false})
 
    componentDidMount() {
        this.props.getStudentList();
    }

    updateStudent(name, grade, subject, id) {
        const { updateStudentInfo, getStudentList } = this.props;

        updateStudentInfo(name, grade, subject, id);
        getStudentList(); 
    }

    removeStudent(id) {
        const { deleteStudent, getStudentList } = this.props;

        deleteStudent(id);
        getStudentList();
    }

    openDeleteModal(studentInfo, id) {
        this.props.openModal();
        this.setState({
            studentData: this.props.students[studentInfo],
            id
        });
    }

    renderStudentList() {
        
        const { students } = this.props;
        return Object.keys(students).map(key => {
            const { name, grade, subject } = students[key];
            console.log("NAME:", name.length);
    
            if ( name.length >= this.state.length) {
                var shortenedName = name.slice(0, 5);
            }            
            return (
                <Fragment key={key}>
                    <tr>
                            <td>{name.length > this.state.length ? <Fragment> <a href="" onClick={this.showMore}>{this.state.showMore ? name : shortenedName+'...'}</a></Fragment> : name}</td>
                            <td>{subject}</td>
                            <td>{grade}</td>
                            <td>
                            <div className="btn-container">
                                
                                <button onClick={() => this.openEditModal(students[key], key)} type="button" className="mr-2 btn btn-warning btn-sm">Edit</button>
                            
                                <button onClick={() => this.openDeleteModal(key, key)} className="btn btn-danger btn-sm" type="button">Delete</button>
                            </div>
                            </td>

                        <MediaQuery query="(max-width: 320px)">
                            <td>{name.length > this.state.mediaQuery300 ? <Fragment> <a onClick={this.showMore}>{this.state.showMore ? name : '...'}</a></Fragment> : name}</td>
                                <td>{subject}</td>
                                <td>{grade}</td>
                                <td>
                                <div className="btn-container">
                                    <button onClick={() => this.openEditModal(students[key], key)} type="button" className="mr-2 mb-2 mbbtn btn-warning btn-sm">Edit</button>
                                    <button onClick={() => this.openDeleteModal(key, key)} className="btn btn-danger btn-sm" type="button">Delete</button>
                                </div>
                            </td>                    
                        </MediaQuery>

                    </tr>
                </Fragment>
            )
        });
    }

    render() {
        this.props.getGradeAverage();
        const { students } = this.props; 

        if ( !students) {
            return <AddStudent/>;
        }  
        return (
            <div className="row">   
                <div>{this.state.editModalOpen ? <EditModal _id={this.state.id} studentData={this.state.studentData} closeModal={this.closeEditModal} /> : null}</div>
                <div>{this.props.isOpen ? <DeleteModal id={this.state.id} studentData={this.state.studentData} /> : null}</div>
                <table className="my-2 table col-lg-8 order-lg-1 order-sm-2 order-2">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Student Name</th>
                            <th scope="col">Student Course</th>
                            <th scope="col">Student Grade</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderStudentList()}
                    </tbody>
                </table>
                <AddStudent/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students.studentList,
        isOpen: state.delete.isOpen
    }
}


export default connect(mapStateToProps, {
    getStudentList: getStudentList,
    updateStudentInfo: updateStudentInfo,
    deleteStudent: deleteStudent,
    openModal: openModal,
    getStudentInfo: getStudentInfo,
    getGradeAverage: getGradeAverage
})(StudentTable);