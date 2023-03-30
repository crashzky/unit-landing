import Timeline from '@/components/Timeline';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import TIMELINE_ITEMS from '@/shared/consts/timelineItems';
import Text from '@components/Text';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Props from './TimelineSection.props';

const TIMELINE_IMAGES = ['/assets/slider/1.jpg', '/assets/slider/2.jpg', '/assets/slider/3.jpg', '/assets/slider/4.jpg',
	'/assets/slider/5.jpg', '/assets/slider/6.jpg', '/assets/slider/7.jpg'];

const TimelineSection: React.FC<Props> = ({ className = '', ...props }) => {
	const { width } = useWindowDimensions();

	return (
		<section className={className + ' bg-black py-10 lg:pt-16 lg:pb-20'} {...props}>
			<div className='px-10 lg:px-28 mb-12'>
				<Text variant='Heading1' tag='h1' className='text-white'>
					Седьмой сезон 2022/23
				</Text>
				<Swiper
					pagination={true}
					modules={[Pagination]}  
					className='mt-10 hidden lg:block'
					spaceBetween={50}
					slidesPerView={3}
					height={393}
					width={width - 224}
				>
					{TIMELINE_IMAGES.map((i, num) => (
						<SwiperSlide key={num}>
							<Image
								height={393}
								width={width - 224}
								className='object-cover rounded-lg'
								src={i}
								alt='timeline' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<Timeline items={TIMELINE_ITEMS} />
		</section>
	);
};

export default TimelineSection;
