import ITeam from '../models/teamItem';

const TEAMS_ITEMS: ITeam[] = [
	{
		teamName: '«ННН» -  МБОУ Гимназия 9',
		members: [
			'Арнаутов Андрей Ильич',
			'Панкевич Артемий Владимирович',
			'Зыков Андрей Алексеевич',
		],
	},
	{
		teamName: '«MinTech» - МАОУ Гимназия 202 «Менталитет»',
		members: [
			'Расковалова Дарья Александровна',
			'Ушков Максим Михайлович',
			'Полуяхтов Павел Сергеевич',
			'Рылова Таисья Кирилловна',
			'Севрюк Александр Юрьевич',
		],
		teacher: 'Кузнецова Ирина Леонидовна',
	},
	{
		teamName: '«RarCompany» - МАОУ Гимназия 202 Менталитет',
		members: [
			'Чеботин Лев',
			'Кучеренко Геннадий',
			'Шалагинов Тимофей',
			'Чунюкин Константин',
			'Кузминых Илья',
			'Потёмкин Николай',
		],
		teacher: 'Фролова Наталья Сергеевна',
	},
	{
		teamName: '«Программиды» - МБОУ СОШ 179',
		members: [
			'Парамонов Владислав Александрович',
			'Бехтхольд Артемий Александрович',
			'Зырянов Роман Даниилович',
			'Миллер Мария Михайловна (МАОУ «Лицей №21»)',
		],
		teacher: 'Янгирова Анфиса Дамировна',
	},
	{
		teamName: 'Dandelion',
		members: [
			'Соколова Софья Артуровна',
			'Горбунов Дмитрий Евгеньевич',
			'Пастухов Егор Андреевич',
			'Ковалев Егор Александрович',
			'Мущинкина Мария Алексеевна (МАОУ СОШ 68)',
		],
	},
	{
		teamName: '«кетчуп махеев» - МАОУ СОШ 68 с УИОП',
		members: [
			'Истомин Дмитрий Максимович',
			'Сурков Георгий Игоревич',
			'Зайков Матвей Константинович',
			'Колосов Кирилл Никитич (МАОУ СОШ 23)',
		],
	},

	{
		teamName: '«Агрегаторы» - МАОУ Лицей 130',
		members: [
			'Рютин Николай Андреевич',
			'Дубровин Вадим Алексеевич',
		],
	},
	{
		teamName: '«Progsi.prom» - Лицей № 110 им. Л.К. Гришиной',
		members: [
			'Гончаров Константин Денисович',
			'Знышев Дмитрий Вадимович',
			'Ипатов Андрей Сергеевич',
			'Пьянков Лев (МБОУ СОШ 11)',
		],
	},
	{
		teamName: '«INVERSE» - МАОУ СОШ №167',
		members: [
			'Белогуров Иван Дмитриевич',
			'Сокерин Артем Алексеевич',
			'Николаева Виктория Алексеевна',
			'Сметанин Дмитрий Юрьевич',
		],
		teacher: 'Шмелев Алексей Андреевич',
	},
	{
		teamName: '«gymFourty» - МАОУ гимназия №40',
		members: [
			'Колосов Илья Владимирович',
			'Виноградова Елизавета Алексеевна',
			'Алимбочка Ярослав Владимирович',
			'Юровицкий Максим Викторович',
			'Петропавлов Дмитрий Валерьевич',
			'Шептихин Вячеслав Алексеевич',
			'Антипина Дарья Сергеевна',
		],
		teacher: 'Мангина Юлия Андреевна',
	},
	{
		teamName: 'МОУ СОШ 21',
		members: [
			'Аминов Андрей Викторович',
			'Болотов Иван Александрович',
			'Березин Данил Андреевич',
			'Прохорова Дарья Александровна',
		],
		teacher: 'Жуйков Дмитрий Сергеевич',
	},
	{
		teamName: '«Belyashi» - МАОУ Гимназия 120',
		members: [
			'Абраменко Анна Алексеевна',
			'Суханова Алиса Алексеевна',
			'Девятых София Константиновна',
			'Кулябина Елизавета Андреевна',
			'Павлючкова Евгения Вячеславовна',
			'Храмова Евдокия Алексеевна',
		],
		teacher: 'Латыпов Руслан Камильевич',
	},
	{
		teamName: '«ITL_Junior» - МАОУ СОШ №67 с УИОП',
		members: [
			'Лукьянчиков Александр Александрович',
			'Баранов Дмитрий Сергеевич',
			'Ахмеров Рамиль Эльнарович',
			'Поляков Всеволод Олегович',
		],
		teacher: 'Дубровин Дмитрий Николаевич',
	},
	{
		teamName: 'IT-Колледж Сириус',
		members: [
			'Пазыч Виктория Сергеевна',
			'Овчанков Никита Сергеевич',
			'Лебедев Леонид Александрович',
			'Шишкин Павел Павлович',
			'Санников Вадим Олегович',
		],
	},
	{
		teamName: '«Стикеры собака228» - МАОУ Лицей 130',
		members: [
			'Юлин Михаил Алексеевич',
			'Злобина Анастасия Константиновна',
		],
		teacher: 'Сидоренко Анна Феликсовна',
	},
	{
		teamName: '«Cython» - МАОУ Лицей №21',
		members: [
			'Костюкович Владислав Дмитриевич',
			'Садыкова Алина Азатовна',
		],
		teacher: 'Майоров Сергей Андреевич',
	},
	{
		teamName: '«160/160» - МАОУ Лицей №21',
		members: [
			'Суслова Анастасия Сергеевна',
			'Рогозников Илья Алексеевич',
		],
		teacher: 'Майоров Сергей Андреевич',
	},
	{
		teamName: 'IT-Колледж Сириус',
		members: [
			'Пазыч Виктория Сергеевна',
			'Овчанков Никита Сергеевич',
			'Лебедев Леонид Александрович',
			'Шишкин Павел Павлович',
			'Санников Вадим Олегович',
		],
	},
	{
		teamName: '«ISFON» - МАОУ гимназия 99',
		members: [
			'Фирсов Никита Алексеевич',
			'Лобанов Иван Александрович',
			'Боярских Арина Алексеевна',
			'Гречухин Владимир Евгеньевич',
			'Богачев Эдуард Андреевич',
		],
	},
	{
		teamName: '«IT205» - МАОУ Гимназия №205 «Театр»',
		members: [
			'Иванов Владислав Денисович',
			'Горбунов Иван Алексеевич',
			'Рагимов Кирилл Амидович',
			'Свалова Анастасия Александровна',
		],
		teacher: 'Подсекаев Андрей Александрович',
	},
	{
		teamName: '«Quattuor» - ФГБОУ МГТУ им. Г. И. Носова, МПК',
		members: [
			'Арефьев Александр Егорович',
			'Мельников Данил Александрович',
			'Дувакин Андрей Андреевич',
			'Максимова Анастасия',
		],
		teacher: 'Сайдильдина Сагынай Маратовна',
	},
	{
		teamName: '«Синий Автобус» - МАОУ СОШ № 67 с УИОП',
		members: [
			'Лобанов Михаил Николаевич',
			'Мухаметзянова Маргарита Эдуардовна',
			'Качилова Мария Александровна',
			'Сельницын Никита Алексеевич',
			'Карачкова Дарья Игоревна (МБОУ Гимназия 5)',
		],
		teacher: 'Дубровин Дмитрий Николаевич',
	},
	{
		teamName: '«VIPit» - МАОУ СОШ №5',
		members: [
			'Прокопьева Екатерина Игоревна',
			'Заикина Анна Андреевна',
			'Новоселова Екатерина Владимировна',
			'Куимова Мария Александровна',
		],
	},
	{
		teamName: '«БЭМС» - Лицей 109',
		members: [
			'Ловыгин Максим Евгеньевич',
			'Лесин Денис Александрович',
			'Попков Максим Александрович',
			'Пахолкова Карина Валерьевна',
		],
		teacher: 'Шохина Наталья Сергеевна',
	},
];

export default TEAMS_ITEMS;
