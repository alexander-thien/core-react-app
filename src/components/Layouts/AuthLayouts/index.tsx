import { Props } from '../../GlobalStyle';
import AuthHeader from './Header';

const AuthLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <AuthHeader />
            <div className="container">{children}</div>
        </>
    );
};

export default AuthLayout;
