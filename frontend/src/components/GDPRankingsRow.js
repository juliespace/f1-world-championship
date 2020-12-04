import React from 'react';

export default class GDPRankingsRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="gdpRankingsResults">
				<div className="year">{this.props.year}</div>
				<div className="gdp">{this.props.gdp}</div>
				<div className="countryName">{this.props.countryName}</div>
			</div>
		);
	}
}
