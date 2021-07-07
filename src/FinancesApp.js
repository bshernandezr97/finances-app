import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './redux/store/config';


import './styles/style.scss';

export const FinancesApp = () => {
    return (
        <Provider store={ store }>
           <AppRouter />
        </Provider>
    )
}
