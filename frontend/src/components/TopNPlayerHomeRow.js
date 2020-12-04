import React from 'react';

export default class TopNPlayerHomeRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topNPlayerHomeResults">
				<div className="totalGDP">{this.props.totalGDP}</div>
				<div className="countryName">{this.props.countryName}</div>
			</div>
		);
	}
}
