import Image from 'next/image';
import Link from 'next/link';
import Text from '../Text';
import Props from './Curator.props';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import VkIcon from '@/assets/vk.svg';
import TgIcon from '@/assets/tg.svg';

const CuratorCard: React.FC<Props> = ({ className = '', curatorName, imgSrc, vkLink, tgLink, ...props }) => {
	const { width } = useWindowDimensions();
	return (
		<article
			className={className
				+ ` bg-lightGrey p-7 grid grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_85px]
					items-center gap-5 rounded-2xl`}
			{...props}
		>
			{imgSrc ? (
				<Image
					width={100}
					height={100}
					src={imgSrc}
					alt='avatar'
					className='object-cover rounded-lg' />
			) : (
				<div className='w-[100px] h-[100px] rounded-lg bg-slate-200'></div>
			)}
			<div>
				<Text variant='BoldBodyText_22' tag='h2'>
					{curatorName}
				</Text>
				{width < 1024 && (
					<div className='grid grid-flow-col w-fit gap-5 mt-2'>
						{vkLink && (
							<Link href={vkLink} target='_blank'>
								<VkIcon />
							</Link>
						)}
						{tgLink && (
							<Link href={tgLink} target='_blank'>
								<TgIcon />
							</Link>
						)}
					</div>
				)}
			</div>
			<div className='grid-flow-col w-fit gap-5 hidden lg:grid'>
				{vkLink && (
					<Link href={vkLink} target='_blank'>
						<VkIcon />
					</Link>
				)}
				{tgLink && (
					<Link href={tgLink} target='_blank'>
						<TgIcon />
					</Link>
				)}
			</div>
		</article>
	);
};

export default CuratorCard;
