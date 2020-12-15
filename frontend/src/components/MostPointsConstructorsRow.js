import React from 'react';

export default class MostPointsConstructorsRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="topConstructorResults">
				<div className="constructor">{this.props.constructorName}</div>
				<div className="milliseconds">{this.props.points}</div>
			</div>
		);
	}
}
