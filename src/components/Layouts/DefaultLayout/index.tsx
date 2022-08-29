import { Props } from '../../GlobalStyle';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </>
    );
};

export default DefaultLayout;
