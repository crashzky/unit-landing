import { textVariants } from './Text.props';

function getStyles(variant: textVariants): string {
	switch(variant) {
		case 'CAPSHEADING':
			return 'font-semibold lg:text-[42px] text-[35px]';
		case 'Heading1':
			return 'font-bold text-[32px] lg:text-[42px]';
		case 'Heading2':
			return 'font-bold text-[25px] lg:text-[32px]';
		case 'BoldBodyText_22':
			return 'font-bold text-[20px] lg:text-[22px]';
		case 'BodyText_22':
			return 'font-semibold text-[20px] lg:text-[22px]';
		case 'BoldBodyText_20':
			return 'font-bold text-[18px] lg:text-xl';
		case 'BodyText_20':
			return 'font-semibold text-base lg:text-xl';
		case 'BodyText_16':
			return 'font-semibold text-base';
	}
}

export default getStyles;
