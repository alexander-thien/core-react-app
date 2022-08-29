import './globalstyle.scss';
export type Props = {
    children: any;
};

const GlobalStyle: React.FC<Props> = ({ children }) => {
    return children;
};

export default GlobalStyle;
