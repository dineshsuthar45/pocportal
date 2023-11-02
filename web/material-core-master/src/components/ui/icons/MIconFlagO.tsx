import * as React from 'react';
import { SVGProps } from 'react';

const SvgMIconFlagO = (props: SVGProps<SVGSVGElement>) => (
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 10 10"
		width={props.width || 10}
		height={props.height || 10}
		fill={props.fill || '#6F7880'}
		{...props}
	>
		<path d="M8.33.981a3.404 3.404 0 0 1-1.646.336A3.965 3.965 0 0 1 5.018.888L4.707.753A4.168 4.168 0 0 0 2.98.3c-1.65 0-1.779.75-1.779.98v8.387h.726l-.005-3.843c.028-.082.272-.296 1.058-.296a3.182 3.182 0 0 1 1.334.376c.09.04.177.08.257.114a4.366 4.366 0 0 0 2.112.599 4.095 4.095 0 0 0 2.09-.49l.124-.126V.554Zm-5.35.045a2.635 2.635 0 0 1 1.517.49 4.371 4.371 0 0 0 2.114.6 4.272 4.272 0 0 0 1.445-.21c.03.627.043 2.462.043 3.702a2.975 2.975 0 0 1-1.415.284 3.456 3.456 0 0 1-1.807-.49l-.145-.072a3.664 3.664 0 0 0-1.751-.528 2.781 2.781 0 0 0-1.053.172l-.005-3.651c.028-.083.272-.297 1.058-.297Z" />
	</svg>
);

export default SvgMIconFlagO;