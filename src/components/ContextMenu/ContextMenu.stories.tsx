import React from 'react';
import createClass from 'create-react-class';
import { ContextMenu, SingleSelect, TextField } from './../../index';
import _ from 'lodash';
import Button from '../Button/Button';

export default {
	title: 'Utility/ContextMenu',
	component: ContextMenu,
	parameters: {
		docs: {
			description: {
				component: (ContextMenu as any).peek.description,
			},
		},
	},
};

/* Default */
export const Default = () => {
	const Component = createClass({
		render() {
			return (
				<ContextMenu>
					<ContextMenu.Target>
						<Button>Target</Button>
					</ContextMenu.Target>

					<ContextMenu.FlyOut
						style={{
							background: 'white',
							boxShadow: '1px 1px 4px black',
							padding: 4,
						}}
					>
						FlyOut
					</ContextMenu.FlyOut>
				</ContextMenu>
			);
		},
	});

	return <Component />;
};
Default.storyName = 'Default';

/* Basic With Text */
export const BasicWithText = () => {
	const Component = createClass({
		render() {
			return (
				<section>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
					tempor mi. Curabitur eget risus ac diam euismod ultricies ac in est.
					Morbi in vehicula arcu, at laoreet libero. Phasellus nisi dolor, porta
					et erat quis, egestas mattis purus.
					<ContextMenu isExpanded direction='up'>
						<ContextMenu.Target>
							<Button>Target</Button>
						</ContextMenu.Target>

						<ContextMenu.FlyOut
							style={{
								background: 'white',
								boxShadow: '1px -1px 4px black',
								padding: 4,
							}}
						>
							FlyOut
						</ContextMenu.FlyOut>
					</ContextMenu>
					Sed vel ex iaculis, tincidunt magna in, fringilla urna. Aenean congue
					est nec elit molestie, nec mollis mi rutrum. Quisque hendrerit nisl
					placerat tempus sodales. Vivamus et tortor vulputate, elementum turpis
					tempor, condimentum sapien. Nunc ac imperdiet ipsum, vitae ullamcorper
					sem.
				</section>
			);
		},
	});

	return <Component />;
};
BasicWithText.storyName = 'BasicWithText';

/* Menu Bar */
export const MenuBar = () => {
	const Component = createClass({
		getInitialState() {
			return {
				isFileExpanded: false,
				fileDirection: 'down',
				isEditExpanded: false,
				editDirection: 'down',
			};
		},

		handleFileMenuToggle() {
			const { isFileExpanded } = this.state;

			this.setState({
				isFileExpanded: !isFileExpanded,
			});
		},

		handleEditMenuToggle() {
			const { isEditExpanded } = this.state;

			this.setState({
				isEditExpanded: !isEditExpanded,
			});
		},

		render() {
			const { isFileExpanded, fileDirection, isEditExpanded, editDirection } =
				this.state;
			return (
				<section>
					<ContextMenu
						portalId='FileMenu-example'
						isExpanded={isFileExpanded}
						direction={fileDirection}
						onClickOut={this.handleFileMenuToggle}
					>
						<ContextMenu.Target>
							<div
								style={{
									background: isFileExpanded ? '#fafafa' : '#eaeaea',
									outline: 'solid 1px #d1d1d1',
									padding: '4px',
									cursor: 'pointer',
								}}
								onClick={this.handleFileMenuToggle}
							>
								File
							</div>
						</ContextMenu.Target>

						<ContextMenu.FlyOut
							style={{
								background: '#fafafa',
								outline: 'solid 1px #d1d1d1',
								boxShadow: ' 1px 1px 2px rgba(0, 0, 0, 0.2)',
								padding: '8px',
							}}
						>
							<div>New Window</div>
							<div>New File</div>
							<div>Open...</div>
							<div>Add Folder...</div>
							<div>Reopen Last Item</div>
							<hr />
							<div>Save</div>
							<div>Save As...</div>
							<div>Save All</div>
							<hr />
							<div>Close Tab</div>
							<div>Close Pane</div>
							<div>Close Window</div>
						</ContextMenu.FlyOut>
					</ContextMenu>

					<ContextMenu
						portalId='EditMenu-example'
						isExpanded={isEditExpanded}
						direction={editDirection}
						onClickOut={this.handleEditMenuToggle}
					>
						<ContextMenu.Target>
							<div
								style={{
									background: isEditExpanded ? '#fafafa' : '#eaeaea',
									outline: 'solid 1px #d1d1d1',
									padding: '4px',
									cursor: 'pointer',
								}}
								onClick={this.handleEditMenuToggle}
							>
								Edit
							</div>
						</ContextMenu.Target>

						<ContextMenu.FlyOut
							style={{
								background: '#fafafa',
								outline: 'solid 1px #d1d1d1',
								boxShadow: ' 1px 1px 2px rgba(0, 0, 0, 0.2)',
								padding: '8px',
							}}
						>
							<div>Undo</div>
							<div>Redo</div>
							<hr />
							<div>Cut</div>
							<div>Copy</div>
							<div>Paste</div>
							<div>Select All</div>
						</ContextMenu.FlyOut>
					</ContextMenu>
				</section>
			);
		},
	});

	return <Component />;
};
MenuBar.storyName = 'MenuBar';

/* Directions Interactive */
export const DirectionsInteractive = () => {
	const { CENTER, DOWN, END, LEFT, RIGHT, START, UP } = ContextMenu;

	const Component = createClass({
		render() {
			const style = {
				background: 'white',
				boxShadow: '1px 1px 4px black',
				padding: 4,
			};

			const {
				direction,
				directonOffset,
				alignment,
				alignmentOffset,
				getAlignmentOffset,
			} = this.state || {};

			const directions = [UP, DOWN, LEFT, RIGHT];
			const alignments = [START, CENTER, END];

			return (
				<section>
					<section
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<SingleSelect
							onSelect={(i) =>
								this.setState({ direction: directions[i as any] })
							}
						>
							<SingleSelect.Placeholder>
								Select a direction
							</SingleSelect.Placeholder>
							{_.map(directions, (direction) => (
								<SingleSelect.Option key={direction}>
									{direction}
								</SingleSelect.Option>
							))}
						</SingleSelect>
						directonOffset:
						<TextField
							style={{ width: 100 }}
							value={directonOffset}
							onChange={(directonOffset) => this.setState({ directonOffset })}
						/>
						<SingleSelect
							onSelect={(i) =>
								this.setState({ alignment: alignments[i as any] })
							}
						>
							<SingleSelect.Placeholder>
								Select an alignment
							</SingleSelect.Placeholder>
							{_.map(alignments, (alignment) => (
								<SingleSelect.Option key={alignment}>
									{alignment}
								</SingleSelect.Option>
							))}
						</SingleSelect>
						alignmentOffset:
						<TextField
							style={{ width: 100 }}
							value={alignmentOffset}
							onChange={(alignmentOffset) => this.setState({ alignmentOffset })}
						/>
						getAlignmentOffset:
						<TextField
							isDisabled={alignment !== CENTER}
							style={{ width: 100 }}
							value={getAlignmentOffset}
							onSubmit={(getAlignmentOffset) =>
								this.setState({ getAlignmentOffset })
							}
						/>
						<code>{getAlignmentOffset || null}</code>
					</section>

					<section
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							margin: '90px',
						}}
					>
						<ContextMenu
							direction={direction}
							directonOffset={
								_.isEmpty(directonOffset) ? 0 : _.parseInt(directonOffset)
							}
							alignment={alignment || undefined}
							alignmentOffset={
								_.isEmpty(alignmentOffset)
									? undefined
									: _.parseInt(alignmentOffset)
							}
							getAlignmentOffset={eval(getAlignmentOffset)}
						>
							<ContextMenu.Target>Target</ContextMenu.Target>

							<ContextMenu.FlyOut style={{ width: 210, ...style }}>
								<div>{`direction: ${direction || 'default'}`}</div>
								<div>{`directonOffset: ${directonOffset || 'default'}`}</div>
								<div>{`alignment: ${alignment || 'default'}`}</div>
								<div>{`alignmentOffset: ${alignmentOffset || 'default'}`}</div>
								<div>{`getAlignmentOffset: ${
									getAlignmentOffset || 'default'
								}`}</div>
							</ContextMenu.FlyOut>
						</ContextMenu>
					</section>
				</section>
			);
		},
	});

	return <Component />;
};
DirectionsInteractive.storyName = 'DirectionsInteractive';

/* Directions Static */
export const DirectionsStatic = () => {
	const { CENTER, DOWN, END, LEFT, RIGHT, START, UP } = ContextMenu;

	const directions = [UP, DOWN, LEFT, RIGHT];
	const alignments = [START, CENTER, END];

	const Component = createClass({
		render() {
			const style = {
				background: 'white',
				boxShadow: '1px 1px 4px black',
				padding: 4,
			};

			return (
				<section
					style={{
						display: 'flex',
						flexDirection: 'row',
						margin: '0 60px',
					}}
				>
					{_.map(directions, (direction) => {
						return (
							<section
								key={direction}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									flexGrow: 1,
								}}
							>
								{_.map(alignments, (alignment) =>
									_.map([0, 15, -15], (directonOffset) =>
										_.map([0, 15, -15], (alignmentOffset) => (
											<div
												key={`${alignment}${alignmentOffset}${directonOffset}`}
												style={{ marginTop: '120px' }}
											>
												<ContextMenu
													{...{
														direction,
														directonOffset,
														alignment,
														alignmentOffset,
													}}
												>
													<ContextMenu.Target>Target</ContextMenu.Target>

													<ContextMenu.FlyOut style={style}>
														<div>{`direction: ${direction}`}</div>
														<div>{`directonOffset: ${directonOffset}`}</div>
														<div>{`alignment: ${alignment}`}</div>
														<div>{`alignmentOffset: ${alignmentOffset}`}</div>
													</ContextMenu.FlyOut>
												</ContextMenu>
											</div>
										))
									)
								)}
							</section>
						);
					})}
				</section>
			);
		},
	});

	return <Component />;
};
DirectionsStatic.storyName = 'DirectionsStatic';
