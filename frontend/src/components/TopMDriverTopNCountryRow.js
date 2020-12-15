import React from 'react';

export default class TopMDriverTopNCountryRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topMDriverTopNCountryResults">
				<div className="gdp">{this.props.id}</div>
				<div className="gdp">{this.props.forename}</div>
				<div className="gdp">{this.props.surname}</div>
				<div className="gdp">{this.props.totalPoints}</div>
				<div className="gdp">{this.props.countryName}</div>
				<div className="gdp">{this.props.gdp}</div>
			</div>
		);
	}
}
