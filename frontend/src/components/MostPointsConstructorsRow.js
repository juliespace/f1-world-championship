import React from 'react';

export default class MostPointsConstructorsRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="mostPointsConstructorsRow">
				<div className="constructorName">{this.props.constructorName}</div>
				<div className="points">{this.props.points}</div>
				<div className="name">{this.props.name}</div>
			</div>
		);
	}
}
