import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGradeAverage } from '../actions';

class StudentAverage extends Component {
    componentDidMount() {
        this.props.getGradeAverage();
    }
    render() {
        
        return (
            <div className="row">
                <h2 className="d-none d-md-block border-bottom my-3 col-lg-12">Student Grade Table
                    <small className="float-right">Grade Average: <span className="badge badge-secondary">{this.props.gradeAverage}</span></small>
                </h2>
                <h4  className="d-md-none border-bottom my-3 col-lg-12">Student Grade Table
                    <small className="float-right">Grade Average: <span className="badge badge-secondary">{this.props.gradeAverage}</span></small>
                </h4>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gradeAverage: state.students.gradeAverage,
    }
}

export default connect(mapStateToProps, {
    getGradeAverage: getGradeAverage
})(StudentAverage);