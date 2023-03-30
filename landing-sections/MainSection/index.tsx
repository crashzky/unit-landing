import Button from '@/components/Button';
import Text from '@/components/Text';
import { useRouter } from 'next/router';
import Props from './MainSection.props';

const MainSection: React.FC<Props> = ({ className = '', ...props }) => {
	const router = useRouter();

	return (
		<section className={className + ' px-10 lg:px-28'} {...props}>
			<Text variant='CAPSHEADING' tag='h1' className='mb-5'>
				Программа для школьников 8-11 классов в формате стартап-акселератора
			</Text>
			<Button className='mb-4' onClick={() => router.push('https://forms.yandex.ru/cloud/633b0d1c7d10f87b2b853b4b/')}>
				Стать участником
			</Button>
			<Button
				variant='text'
				className='mb-4'
				onClick={() => router.push('https://forms.yandex.ru/cloud/63c41a9bc417f367518432cc/')}
			>
				Стать куратором
			</Button>
			<video className='rounded-2xl mb-[50px] lg:mb-24' poster='/assets/demo_preview.png' controls muted autoPlay>
				<source src='/assets/demo.mp4' type='video/mp4' />
			</video>
		</section>
	);
};

export default MainSection;
