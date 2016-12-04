import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesForms from './CoursesForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }

    }

    render() {
        return (
            <CoursesForms
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    const course = {id: '', watchHref: '', title: '', authorId: '', lenght: '', category: ''};
    const authorsDropdown = state.authorReducer.map(author=> {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    });
    return {
        course: course,
        authors: authorsDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
