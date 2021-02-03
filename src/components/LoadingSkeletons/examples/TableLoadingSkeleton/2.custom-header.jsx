import React from 'react';
import createClass from 'create-react-class';
import { TableLoadingSkeleton } from '../../../../index';

export default createClass({
	render() {
		return (
			<TableLoadingSkeleton
				isLoading={true}
				width={700}
				height={300}
				header='Table Loading Skeletons'
			/>
		);
	},
});
