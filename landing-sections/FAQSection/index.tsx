import FAQItem from '@/components/FAQItem';
import FAQ_ITEMS from '@/shared/consts/faqItems';
import Text from '@components/Text';
import Props from './FAQSection.props';

const FAQSection: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<section className={className + ' bg-lightGrey px-10 lg:px-28 py-10 lg:py-16'} {...props}>
			<Text variant='Heading1' tag='h2'>
				Частые вопросы
			</Text>
			<div className='mt-10 grid gap-8 lg:gap-12'>
				{FAQ_ITEMS.map((i, num) => (
					<FAQItem
						key={num}
						question={i.question}
						answer={i.answer} />
				))}
			</div>
		</section>
	);
};

export default FAQSection;
