import { AppProps } from 'next/app';
import Head from 'next/head';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/globals.css';
import '@/styles/fonts.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					ЮнIT Урал - Молодёжный IT-акселератор
				</title>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					// eslint-disable-next-line max-len
					content='«ЮнIT Урал» – программа для тех, кто чувствует в себе смелость и силы на практике реализовать реальный IT-проект.' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://profoam.ru/' />
				<meta property='og:title' content='ЮнIT Урал - Молодёжный IT-акселератор' />
				<meta
					property='og:description'
					// eslint-disable-next-line max-len
					content='«ЮнIT Урал» – программа для тех, кто чувствует в себе смелость и силы на практике реализовать реальный IT-проект.' />
				<meta
					property='og:image'
					content='/assets/og_image.png' />
					
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://unit-ural.tech/' />
				<meta property='twitter:title' content='ЮнIT Урал - Молодёжный IT-акселератор' />
				<meta
					property='twitter:description'
					// eslint-disable-next-line max-len
					content='«ЮнIT Урал» – программа для тех, кто чувствует в себе смелость и силы на практике реализовать реальный IT-проект.' />
				<meta
					property='twitter:image'
					content='/assets/og_image.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
