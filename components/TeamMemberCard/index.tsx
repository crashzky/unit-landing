import Image from 'next/image';
import Text from '../Text';
import Props from './TeamMemberCard.props';
import Link from 'next/link';

import VkIcon from '@/assets/vk.svg';
import TgIcon from '@/assets/tg.svg';

const TeamMemberCard: React.FC<Props> = ({ avatar, fio, position, phone, vkLink, tgLink, ...props }) => {
	return (
		<article {...props}>
			<div className='grid gap-2 lg:gap-4 mb-1'>
				<Image
					width={142}
					height={142}
					className='object-cover rouned-[10px] mx-auto block'
					src={avatar}
					alt='avatar' />
				<Text variant='Heading2' tag='h3' className='text-center'>
					{fio}
				</Text>
				<Text variant='BodyText_16' tag='p' className='text-primary text-center'>
					{position}
				</Text>
				<Link href={`tel:${phone}`}>
					<Text variant='BoldBodyText_22' tag='p' className='text-center'>
						{phone}
					</Text>
				</Link>
			</div>
			<div className='grid grid-flow-col gap-3 items-center w-fit mx-auto'>
				{vkLink && (
					<Link target='_blank' href={vkLink}>
						<VkIcon />
					</Link>
				)}
				{tgLink && (
					<Link target='_blank' href={tgLink}>
						<TgIcon />
					</Link>
				)}
			</div>
		</article>	
	);
};

export default TeamMemberCard;
