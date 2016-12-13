import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header
                    loading={this.props.loading}
                />
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        loading: state.numAjaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);