import { Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import { Layout } from '../layout/layout';
import SignUp from '../pages/sign-up/sign-up';
import { Home } from '../pages/home/home';

const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout><Suspense><Outlet /></Suspense> </Layout>,
            children: [
                        {path: '/', element: <Navigate to={'sign-up'} replace />},
                        {
                            path: 'sign-up',
                            element: <SignUp />
                        },
                        {
                            path: 'home',
                            element: <Home />
                        },
                    ]
        }
    ])
};

export default AppRoutes;