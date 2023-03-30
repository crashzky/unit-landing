import { buttonVariant } from './Button.props';

const COMMON_STYLES = 'rounded-lg font-semibold px-5 py-2.5 block ';

function getStyles(variant: buttonVariant): string {
	switch(variant) {
		case 'primary':
			return COMMON_STYLES + 'bg-primary text-white';
		case 'text':
			return COMMON_STYLES + 'text-primary';
	}
}

export default getStyles;
