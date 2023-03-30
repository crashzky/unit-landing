import TeamMemberCard from '@/components/TeamMemberCard';
import Text from '@/components/Text';
import UNIT_TEAM_ITEMS from '@/shared/consts/unitTeam';
import Props from './TeamSection.props';

const TeamSection: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<section className={className + ' px-10 lg:px-28 py-14 lg:pt-12 lg:pb-24 bg-lightGrey'} {...props}>
			<Text variant='Heading1' tag='h2' className='mb-16'>
				Команда
			</Text>
			<div className='flex flex-col lg:flex-row justify-between gap-14 lg:gap-0'>
				{UNIT_TEAM_ITEMS.map((i, num) => (
					<TeamMemberCard
						key={num}
						{...i} />
				))}
			</div>
		</section>
	);
};

export default TeamSection;
