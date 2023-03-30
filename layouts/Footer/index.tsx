import Props from './Footer.props';
import Link from 'next/link';

import LogoIcon from '@/assets/logo.svg';
import FOOTER_ITEMS from '@shared/consts/footerItems';
import WoobleIcon from '@/assets/wooble.svg';

const Footer: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<footer
			className={'bg-black lg:px-28 py-11 grid items-center lg:grid-cols-[auto_auto_1fr_auto] justify-items-center gap-14 '
				+ className}
			{...props}
		>
			<LogoIcon className='fill-white' />
			<div className='flex flex-col lg:flex-row items-center gap-10'>
				{FOOTER_ITEMS.map((i, num) => (
					<Link key={num} className='font-semibold text-white' href={i.href}>
						{i.label}
					</Link>
				))}
			</div>
			<div></div>
			<Link href='https://wooble.team' target='_blank'>
				<WoobleIcon />
			</Link>
		</footer>
	);
};

export default Footer;
