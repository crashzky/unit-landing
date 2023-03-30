interface IFAQItem {
	question: string;
	answer: string;
}

const FAQ_ITEMS: IFAQItem[] = [
	{
		question: 'Со скольки лет можно стать участником программы?',
		answer: `Участники программы ЮнIT Урал – подростки 15-17 лет, учащиеся средних
			и старших классов школы, а также младших курсов колледжей.`,
	},
	{
		question: 'Обязательно ли хорошо знать программирование и математику?',
		answer: `Нет, не обязательно. Однако важно понимать, что акселератор напрямую связан с IT,
			и нужно иметь желание учиться и пробовать что-то новое. Также в команде есть различные роли, не
			связанные с программированием (дизайнер, аналитик и т.п.), которые могут подойти тем, кому не
			интересно написание программного кода.`,
	},
	{
		question: 'Что мне принесет участие в сессии ЮнIT?',
		answer: `Опыт работы в команде над проектом IT направленности, опыт публичных выступлений,
			взаимодействия с заказчиками, возможность общаться с экспертами из ведущих IT компаний Свердловской
			области и России и перенимать опыт работающих специалистов из разных сфер IT.`,
	},
	{
		question: 'Какие IT-направления затрагивает программа?',
		answer: `Практически все: от веб-программирования до разработки мобильных приложений и машинного обучения.
			Все зависит только от фантазии и возможностей команды. На наших сессиях часто выступают дизайнеры,
			аналитики, разработчики, тестировщики и другие IT-специалисты.`,
	},
	{
		question: 'Какие еще мероприятия я могу посетить помимо ЮнIT Урал?',
		answer: `Команда Уральского клуба нового образования проводит различные хакатоны, мастер-классы
			и многие другие интересные мероприятия технической направленности, а IT-партнеры программы организуют
			олимпиады, конкурсы и даже стажировки. Обо всех близких к нам мероприятиях мы сообщаем в наших социальных сетях.`,
	},
];

export default FAQ_ITEMS;