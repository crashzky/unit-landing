import { useState } from 'react';
import Text from '../Text';
import Props from './FAQItem.props';

import PlusIc from '@/assets/icons/plus_ic.svg';
import MinusIc from '@/assets/icons/minus_ic.svg';

const FAQItem: React.FC<Props> = ({ className = '', question, answer, onClick = () => undefined, ...props }) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<button
			className={className + ' grid grid-cols-[auto_1fr_22px]'}
			onClick={(e) => {
				onClick(e);
				setIsOpened((prev) => !prev);
			}}
			{...props}
		>
			<Text variant='BoldBodyText_20' tag='h3' className='text-left lg:text-center'>
				{question}
			</Text>
			<div></div>
			{isOpened ? <MinusIc /> : <PlusIc />}
			{isOpened && (
				<Text variant='BodyText_16' tag='p' className='col-start-1 col-end-4 text-start text-primary mt-3'>
					{answer}
				</Text>
			)}
		</button>
	);
};

export default FAQItem;
