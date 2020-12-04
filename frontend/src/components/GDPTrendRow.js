import React from 'react';

export default class GDPTrendRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="gdpTrendResults">
				<div className="first_year">{this.props.first_year}</div>
				<div className="last_year">{this.props.last_year}</div>
				<div className="gdp_trend">{this.props.gdp_trend}</div>
			</div>
		);
	}
}
