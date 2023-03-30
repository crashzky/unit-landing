import Text from '@/components/Text';
import Props from './NewsSection.props';

import RamblerIcon from '@/assets/smi/rambler.svg';
import TassIcon from '@/assets/smi/tass.svg';
import { useRouter } from 'next/router';

const NewsSection: React.FC<Props> = ({ className = '', ...props }) => {
	const router = useRouter();

	return (
		<section className={className + ' px-10 py-14 lg:px-28 lg:pt-28 lg:pb-40'} {...props}>
			<Text variant='Heading1' tag='h2' className='mb-8 lg:mb-12'>
				Сми о нас
			</Text>
			<div className='flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-28'>
				{/* eslint-disable-next-line max-len */}
				<button onClick={() => router.push('https://news.rambler.ru/internet/42114704-uralskiy-shkolnik-sozdal-servis-dlya-blokirovki-poddelnyh-akkauntov/')}>
					<RamblerIcon />
				</button>
				<button onClick={() => router.push('https://tass.ru/obschestvo/6218019')}>
					<TassIcon />
				</button>
			</div>
		</section>
	);
};

export default NewsSection;
