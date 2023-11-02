import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconMore = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path
			d="M8.6 3.6A1.43 1.43 0 0 0 7.2 5 1.4 1.4 0 0 0 10 5a1.43 1.43 0 0 0-1.4-1.4Zm-7.2 0A1.415 1.415 0 0 0 .1 5a1.43 1.43 0 0 0 1.4 1.4A1.344 1.344 0 0 0 2.8 5a1.43 1.43 0 0 0-1.4-1.4Zm3.6 0A1.506 1.506 0 0 0 3.6 5 1.506 1.506 0 0 0 5 6.4 1.506 1.506 0 0 0 6.4 5 1.506 1.506 0 0 0 5 3.6Z"
			data-name="727-more-toolbar-selected@2x.png"
		/>
	</svg>
);

export default SvgMIconMore;
