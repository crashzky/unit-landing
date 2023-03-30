import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	ym(): string {
		return (
		  '<script src=\'https://mc.yandex.ru/metrika/watch.js\' type=\'text/javascript\'></script>' +
		  '<script type=\'text/javascript\'>' +
				'try {' +
					  'var yaCounter92096538 = new Ya.Metrika({' +
					  'id:92096538,' +
					  'clickmap:true,' +
					  'trackLinks:true,' +
					  'accurateTrackBounce:true,' +
					  'webvisor:true,' +
					  'trackHash:true' +
					'});' +
				'} catch(e) { }' +
		  '</script>'
		);
	};

	render(): JSX.Element {
		return (
			<Html lang='ru'>
				<Head />
				<body>
					<div dangerouslySetInnerHTML={{ __html: this.ym() }} />
					<Main />
					<NextScript />
				</body>
			</Html>	
		);
	}
}

export default MyDocument;
