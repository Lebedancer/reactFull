import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Coutse</h2>
                <CoursesList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courseReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
