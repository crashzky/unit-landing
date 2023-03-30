import Props from './Header.props';
import Link from 'next/link';
import Button from '@components/Button';
import { useRouter } from 'next/router';
import HEADER_ITEMS from '@shared/consts/headerItems';

import LogoIcon from '@/assets/logo.svg';

const Header: React.FC<Props> = ({ className = '', ...props }) =>{
	const router = useRouter();

	return (
		<header
			className={className
				+ ' lg:sticky top-0 lg:px-28 py-11 flex flex-col lg:flex-row items-center justify-between bg-white'}
			{...props}
		>
			<Link href='/'>
				<LogoIcon />
			</Link>
			<nav className='flex flex-col lg:flex-row items-center gap-12 my-10 lg:my-0'>
				{HEADER_ITEMS.map((i, num) => (
					<Link key={num} href={i.href} className='font-semibold'>
						{i.label}
					</Link>
				))}
			</nav>
			<Button onClick={() => router.push('https://forms.yandex.ru/cloud/633b0d1c7d10f87b2b853b4b/')}>
				Подать заявку
			</Button>
		</header>
	);
};

export default Header;
