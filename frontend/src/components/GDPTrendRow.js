import React from 'react';

export default class GDPTrendRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topDriverResults">
				<div className="forename">{this.props.first_year}</div>
				<div className="surname">{this.props.last_year}</div>
				<div className="milliseconds">{this.props.gdp_trend}</div>
			</div>
		);
	}
}
