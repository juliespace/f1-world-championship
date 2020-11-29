import React from 'react';

export default class LeastLapTimeConstructorRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="leastLapTimeConstructorResults">
				<div className="constructorName">{this.props.constructorName}</div>
				<div className="averageLapTime">{this.props.averageLapTime}</div>
			</div>
		);
	}
}
