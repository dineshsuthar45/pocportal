import { FormControl } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import React, { SVGProps } from 'react';
import { MColours } from '../../../theme/colours';

import * as Icons from './';

const AllIcons = (args: SVGProps<SVGSVGElement>) => {
	const icons = Object.values(Icons);
	const iconsMapped = icons.map((IconComponent, key) => (
		<FormControl sx={{ margin: '10px', alignItems: 'center', width: '110px' }} key={key}>
			<IconComponent {...args} />
			<span style={{ paddingTop: '10px' }}>{IconComponent.name.replace('Svg', '')}</span>
		</FormControl>
	));

	return <div>{iconsMapped}</div>;
};

export default {
	title: 'Components/Icons',
	component: AllIcons,
	tags: ['autodocs'],
	argTypes: {
		fill: {
			control: 'color',
			description: 'Icon colour',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: MColours.greyScale[500] },
			},
		},
		width: {
			control: 'number',
			description: 'Icon width',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 10 },
			},
		},
		height: {
			control: 'number',
			description: 'Icon height',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 10 },
			},
		},
	},
} as Meta<typeof AllIcons>;

export const Default = {};
