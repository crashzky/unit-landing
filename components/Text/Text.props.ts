import { DetailedHTMLProps, HTMLAttributes } from 'react';

type textVariants = 'CAPSHEADING' | 'Heading1' | 'Heading2' | 'BoldBodyText_22' | 'BodyText_22'
	| 'BoldBodyText_20' | 'BodyText_20' | 'BodyText_16';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	variant: textVariants; 
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
};

export default Props;

export type {
	textVariants,
};
