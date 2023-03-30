import Link from 'next/link';
import Text from '@components/Text';
import MainLayout from '@layouts/MainLayout';
import PARTNERS from '@shared/consts/partners';

const PartnersPage = (): JSX.Element => {
	return (
		<MainLayout>
			<div className='min-h-[calc(100vh_-_250px)]'>
				<Text variant='Heading1' tag='h1' className='pl-28'>
					Партнеры
				</Text>
				<section className='px-10 lg:px-28 my-10 flex flex-col lg:flex-row flex-wrap items-center justify-around gap-20'>
					{PARTNERS.map((I, num) => (
						<Link key={num} target='_blank' href={I.link}>
							<I.icon />
						</Link>
					))}
				</section>
			</div>
		</MainLayout>
	);
};

export default PartnersPage;
