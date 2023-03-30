import IMenuItem from '@shared/models/menuItem';

const HEADER_ITEMS: IMenuItem[] = [
	{
		label: 'О программе',
		href: '/',
	},
	{
		label: 'Команды',
		href: '/teams',
	},
	{
		label: 'Кураторы',
		href: '/curators',
	},
	{
		label: 'Партнеры',
		href: '/partners',
	},
	{
		label: 'Контакты',
		href: '/#contacts',
	},
];

export default HEADER_ITEMS;
