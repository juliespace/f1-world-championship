import React from 'react';

export default class GDPRankingsRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topDriverResults">
				<div className="forename">{this.props.year}</div>
				<div className="surname">{this.props.gdp}</div>
				<div className="milliseconds">{this.props.countryName}</div>
			</div>
		);
	}
}
