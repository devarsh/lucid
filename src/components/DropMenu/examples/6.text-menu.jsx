import React from 'react';
import { DropMenu, TextField } from '../../../index';

const {
	Control,
	Option,
} = DropMenu;

export default React.createClass({
	render() {
		return (
			<DropMenu>
				<Control>
					<TextField placeholder='Text DropMenu' />
				</Control>
				<Option>Red</Option>
				<Option>Green</Option>
				<Option>Blue</Option>
			</DropMenu>
		);
	},
});
