import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ''
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Coutse</h2>
                {this.props.courses.map(this.courseRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" onClick={this.onClickSave} value="Save"/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courseReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);