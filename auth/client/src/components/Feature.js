import React, { Component } from 'react';
import requireAuth from 'components/requireAuth';
class Feature extends Component {
	render() {
		return <div>Feature!</div>;
	}
}
export default requireAuth(Feature);
