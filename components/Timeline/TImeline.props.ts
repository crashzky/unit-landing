import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ITimelineItem {
	month: number;
	title: string;
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: ITimelineItem[];
}

export default Props;

export type {
	ITimelineItem,
};
