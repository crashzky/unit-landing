import MainLayout from '@layouts/MainLayout';

import MainSection from '@/landing-sections/MainSection';
import AboutSection from '@/landing-sections/AboutSection';
import TimelineSection from '@/landing-sections/TimelineSection';
import NewsSection from '@/landing-sections/NewsSection';
import FAQSection from '@/landing-sections/FAQSection';
import PartnersSection from '@/landing-sections/PartnersSection';
import TeamSection from '@/landing-sections/TeamSection';

const MainPage = (): JSX.Element => {
	return (
		<MainLayout>
			<MainSection />
			<AboutSection />
			<TimelineSection />
			<NewsSection />
			<FAQSection />
			<PartnersSection />
			<TeamSection id='contacts' />
		</MainLayout>
	);
};

export default MainPage;
