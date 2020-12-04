import React from 'react';

export default class TopMDriverTopNCountryRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topMDriverTopNCountryResults">
				<div className="id">{this.props.id}</div>
				<div className="forename">{this.props.forename}</div>
				<div className="surname">{this.props.surname}</div>
				<div className="totalPoints">{this.props.totalPoints}</div>
				<div className="countryName">{this.props.countryName}</div>
				<div className="gdp">{this.props.gdp}</div>
			</div>
		);
	}
}
