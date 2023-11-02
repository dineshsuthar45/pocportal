import React from 'react';
import { Box, Tabs as MuiTabs, useTheme } from '@mui/material';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { MPanel } from '../internal/panel';
import { MTab } from '../internal/tab';
import './Tabs.scss';
import { TabsProps } from './Tabs.types';

export const MTabs = (props: TabsProps) => {
	const theme = useTheme();
	const { options, value, onChange, component: Component, ...otherProps } = props;

	const tabOptions = options.map((option, index) => {
		return <MTab key={index} {...option} color={props.color} disabled={props.disabled}></MTab>;
	});

	const tabPanels = options.map((option, index) => {
		return (
			<MPanel value={value} index={index} key={index}>
				{option.view}
			</MPanel>
		);
	});

	return (
		<Box
			className={classNames('tabs-root', theme.palette.mode, {
				vertical: props.orientation === 'vertical',
				flip: props.orientation === 'vertical' && props.verticalflip,
			})}
			sx={{ height: props.maxHeight }}
		>
			<MuiTabs
				className={classNames(props.size)}
				disabled={props.disabled}
				variant={props.variant}
				centered={props.centered}
				indicatorColor={props.color}
				orientation={props.orientation}
				textColor={props.color}
				value={value}
				component={Component}
				{...otherProps}
				onChange={(event, value) => onChange(Number(value))}
			>
				{tabOptions}
			</MuiTabs>
			<SwipeableViews index={value}>{tabPanels}</SwipeableViews>
		</Box>
	);
};

MTabs.defaultProps = {
	centered: false,
	color: 'primary',
	disabled: false,
	orientation: 'horizontal',
	scrollButtons: 'auto',
	selectionFollowsFocus: false,
	size: 'medium',
	variant: 'standard',
	visibleScrollbar: false,
	verticalflip: false,
};
