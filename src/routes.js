/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';

// boilerplate included components 
import App from './components/App';
import ContentPage from './components/ContentPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

// // custom components 
import HomePage from './components/HomePage'; 
import CaseStudy from './components/CaseStudy'; 

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>
        {component}
    </App>;
  });

  on('/contact', async () => <ContactPage />);

    on('/work/*', async () => <CaseStudy /> );

  on('/', async () =>  <HomePage /> );

  on('/register', async () => <RegisterPage />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
