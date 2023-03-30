import Props from './Text.props';
import getStyles from './Text.styles';

const Text: React.FC<Props> = ({ variant, tag, children, className = '', ...props }) => {
	switch(tag) {
		case 'h1':
			return (
				<h1 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h4>
			);
		case 'h5':
			return (
				<h5 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h5>
			);
		case 'h6':
			return (
				<h6 className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</h6>
			);
		case 'p':
			return (
				<p className={`${className} ${getStyles(variant)}`} {...props}>
					{children}
				</p>
			);
	}
};

export default Text;
