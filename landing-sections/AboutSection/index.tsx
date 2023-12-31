import Text from '@/components/Text';
import Props from './AboutSection.props';

const AboutSection: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<section className={className + ' lg:grid lg:grid-cols-[auto_1fr] gap-10 px-10 lg:px-28 lg:pt-24 lg:pb-32'} {...props}>
			<Text variant='Heading1' tag='h2' className='mb-5 lg:mb-0'>
				О программе
			</Text>
			<Text variant='BodyText_20' tag='p' className='mb-5 lg:mb-0'>
				Бесплатная программа в формате акселератора IT-стартапов для школьников 8-11 классов. Каждый месяц
				участники собираются на сессии, где обучаются проектной деятельности и работе в команде,
				слушают лекции ведущих специалистов и руководителей IT-компаний Екатеринбурга и получают
				обратную связь по своим проектам.
			</Text>
			<Text variant='BodyText_20' tag='p' className='col-start-1 col-end-3 mb-5 lg:mb-0'>
				Между сессиями команды самостоятельно занимаются проектами: анализируют рынок потребителей,
				находят пути решения задач, возникающих в процессе, разрабатывают продукт и представляют свой
				проект жюри и другим участникам на сцене ведущего разработчика онлайн сервисов для бухгалтерии
				и бизнеса СКБ Контур.
			</Text>
			<Text variant='BodyText_20' tag='p' className='col-start-1 col-end-3 mb-5 lg:mb-0'>
				У каждой команды есть свой куратор из числа выпускников прошлых лет и преподавателей школ, готовый
				направить на лучший вектор развития и поддержать ресурсами программы, при этом не вмешиваясь в процесс
				разработки. Такой подход является важной особенностью программы, приближая её к условиям реальной жизни.
			</Text>
		</section>
	);
};

export default AboutSection;
