import Link from 'next/link';
import Text from '@/components/Text';
import PARTNERS from '@/shared/consts/partners';
import Props from './PartnersSection.props';

const PartnersSection: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<section className={className + ' px-10 lg:px-28 py-14 lg:pt-24 lg:pb-40'} {...props}>
			<Text variant='Heading1' tag='h2' className='mb-14'>
				Партнеры
			</Text>
			<div className='flex flex-col lg:flex-row flex-wrap items-center justify-around gap-20'>
				{PARTNERS.map((I, num) => (
					<Link key={num} target='_blank' href={I.link}>
						<I.icon />
					</Link>
				))}
			</div>
		</section>
	);	
};

export default PartnersSection;
