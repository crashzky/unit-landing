import getStyles from './Button.styles';
import Props from './Button.props';

const Button: React.FC<Props> = ({ variant = 'primary', children, className = '', ...props }) => {
	return (
		<button className={`${className} ${getStyles(variant)}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
