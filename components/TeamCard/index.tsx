import Text from '../Text';
import Props from './TeamCard.props';

const TeamCard: React.FC<Props> = ({ className = '', teamName, members, teacher, ...props }) => {
	return (
		<article className={className + ' bg-lightGrey p-7 h-fit'} {...props}>
			<Text variant='BoldBodyText_20' tag='h2' className='mb-2.5'>
				{teamName}
			</Text>
			{members.map((i, num) => (
				<Text variant='BodyText_16' tag='p' key={num}>
					{i}
				</Text>
			))}
			{teacher && (
				<Text variant='BodyText_16' tag='p' className='mt-2'>
					<span className='font-bold text-primary'>
						Руководитель от ОУ:
					</span>
					{' ' + teacher}
				</Text>
			)}
		</article>
	);
};

export default TeamCard;
