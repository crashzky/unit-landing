import CuratorCard from '@/components/CuratorCard';
import Text from '@/components/Text';
import MainLayout from '@/layouts/MainLayout';
import CURATORS_ITEMS from '@/shared/consts/curators';

const CuratorsPage = (): JSX.Element => {
	return (
		<MainLayout>
			<Text variant='Heading1' tag='h1' className='mt-5 pl-10 lg:pl-28 mb-6'>
				Кураторы
			</Text>
			<Text variant='BodyText_22' tag='p' className='px-10 lg:px-28'>
				Кураторы это те важные и крутые люди которые на протяжении всего акселератора,
				в течение нескольких месяцев помогают, чтобы командам удалось создать полезный и крутой продукт. 
			</Text>
			<section className='lg:grid grid-cols-2 mt-6 gap-3 px-10 lg:px-28'>
				{CURATORS_ITEMS.map((i, num) => (
					<CuratorCard
						key={num}
						{...i} />
				))}
			</section>
		</MainLayout>
	);
};

export default CuratorsPage;
