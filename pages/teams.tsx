import TeamCard from '@/components/TeamCard';
import Text from '@/components/Text';
import MainLayout from '@/layouts/MainLayout';
import TEAMS_ITEMS from '@/shared/consts/teams';

const TeamsPage = (): JSX.Element => {
	return (
		<MainLayout>
			<section className='mx-10 lg:mx-28 pb-10'>
				<Text variant='Heading1' tag='h1' className='mt-5 mb-8'>
					Список команд 2022-2023
				</Text>
				<div className='lg:grid grid-cols-2 gap-5'>
					<div className='grid gap-5'>
						{TEAMS_ITEMS.slice(0, TEAMS_ITEMS.length / 2).map((i, num) => (
							<TeamCard
								key={num}
								{...i} />
						))}
					</div>
					<div className='grid gap-5'>
						{TEAMS_ITEMS.slice(TEAMS_ITEMS.length / 2).map((i, num) => (
							<TeamCard
								key={num}
								{...i} />
						))}
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default TeamsPage;
