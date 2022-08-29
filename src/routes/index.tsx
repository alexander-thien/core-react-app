import { Props } from '../components/GlobalStyle';
import { AuthLayout } from '../components/Layouts';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

interface routeItem {
    path: string;
    component: JSX.Element;
    layout?: React.FC<Props> | null;
}

const publicRoutes: routeItem[] = [
    { path: '/', component: <Home /> },
    { path: '/auth/sign/in', component: <Login />, layout: AuthLayout },
    { path: '/auth/sign/up', component: <Register />, layout: AuthLayout },
];
export { publicRoutes };
