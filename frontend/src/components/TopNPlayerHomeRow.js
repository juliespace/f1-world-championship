import React from 'react';

export default class TopNPlayerHomeRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topConstructorResults">
				<div className="constructor">{this.props.totalGDP}</div>
				<div className="milliseconds">{this.props.countryName}</div>
			</div>
		);
	}
}
