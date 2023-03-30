import { useEffect, useState } from 'react';
import IResponse from './useWindowDimensions.props';

const useWindowDimensions = (): IResponse => {
	const [width, setWidth_] = useState(0);
	const [height, setHeight_] = useState(0);

	useEffect(() => {
		setWidth_(window.innerWidth);
		setHeight_(window.innerHeight);
	}, []);

	function setWidth () {
		setWidth_(window.innerWidth);
	};
	function setHeight () {
		setHeight_(window.innerHeight);
	};

	return {
		width,
		height,
		setWidth,
		setHeight,
	};
};

export default useWindowDimensions;
