import Text from '../Text';
import Props from './TImeline.props';

import CircleIcon from '@/assets/circle.svg';
import MONTHS from '@/shared/consts/months';

const Timeline: React.FC<Props> = ({ className = '', items, ...props }) => {
	const currentMonth = new Date(Date.now()).getMonth();

	return (
		<div
			className={className
				+ ' timeline grid grid-rows-[auto_30px_auto] grid-flow-col max-w-[100vw] w-fit items-center overflow-x-scroll'}
			{...props}
		>
			<div className='w-28'></div>
			<div className='w-28'>
				<div className='h-1 w-full bg-primary'></div>
			</div>
			<div className='w-28'></div>

			{items.map((i, num) => (
				<>
					<div className={`w-60 mb-3 ${currentMonth === i.month ? 'text-white' : 'text-primary'}`} key={num + '_1'}>
						{num % 2 === 0 && (
							<>
								<Text variant='BoldBodyText_22' tag='h3' className='mb-2.5'>
									{MONTHS[i.month]}
								</Text>
								<Text variant='BodyText_16' tag='p'>
									{i.title}
								</Text>
							</>
						)}
					</div>
					<div className='w-60 relative' key={num + '_2'}>
						<CircleIcon
							className={`absolute left-0 -top-3 ${currentMonth === i.month && 'fill-white stroke-white'}`} />
						<div className='h-1 w-full bg-primary'></div>
					</div>
					<div className={`w-60 mt-3 ${currentMonth === i.month ? 'text-white' : 'text-primary'}`} key={num + '_3'}>
						{num % 2 !== 0 && (
							<>
								<Text variant='BoldBodyText_22' tag='h3' className='mb-2.5'>
									{MONTHS[i.month]}
								</Text>
								<Text variant='BodyText_16' tag='p'>
									{i.title}
								</Text>
							</>
						)}
					</div>
				</>
			))}

			<div className='w-28'></div>
			<div className='w-28'>
				<div className='h-1 w-full bg-primary'></div>
			</div>
			<div className='w-28'></div>
		</div>
	);
};

export default Timeline;
