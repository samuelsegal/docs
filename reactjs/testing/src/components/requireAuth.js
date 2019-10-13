import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Authorization HOC. it is used to guard a component with authorization
 */
export default ChildComponent => {
	class ComposedComponent extends Component {
		//component got rendered
		componentDidMount() {
			this.shouldNavigateAway();
		}
		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway = () => {
			if (!this.props.auth) {
				console.log('UNAUTHORIZED');
				this.props.history.push('/');
			}
		};
		render() {
			return <ChildComponent {...this.props} />;
		}
	}
	const mapStateToProps = state => {
		return { auth: state.auth };
	};
	return connect(mapStateToProps)(ComposedComponent);
};
