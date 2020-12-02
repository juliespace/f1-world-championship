import React from 'react';

export default class MostPointsDriverRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topDriverResults">
				<div className="forename">{this.props.forename}</div>
				<div className="surname">{this.props.surname}</div>
				<div className="milliseconds">{this.props.points}</div>
			</div>
		);
	}
}
