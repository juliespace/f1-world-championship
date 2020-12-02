import React from 'react';

export default class LeastLapTimeConstructorRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topConstructorResults">
				<div className="constructor">{this.props.constructorName}</div>
				<div className="milliseconds">{this.props.averageLapTime}</div>
			</div>
		);
	}
}
