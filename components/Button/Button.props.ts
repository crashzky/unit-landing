import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type buttonVariant = 'primary' | 'text';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: buttonVariant;
};

export default Props;

export type {
	buttonVariant,
};
