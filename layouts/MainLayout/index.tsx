import Footer from '../Footer';
import Header from '../Header';
import Props from './MainLayout.props';

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
