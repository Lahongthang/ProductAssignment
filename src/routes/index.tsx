import { useRoutes, Navigate } from 'react-router-dom';
import ProductPage from '../pages/product';

export default function Router() {
    return useRoutes([
        {
            path: '',
            element: <Navigate to={'/home'} />,
        },
        {
            path: 'home',
            element: <ProductPage />,
        },
        {
            path: '*',
            element: <>Page404</>
        }
    ]);
};
