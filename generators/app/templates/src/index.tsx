import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<% if(redux) { %>
import { Provider } from 'react-redux';
import { store } from './redux/configure-store';
import { Container } from './components/counter/container';
<% } %>

import Home from './pages/home';
import NotFound from './pages/notfound';
<% if(auth) { %>
import Signin from './pages/signin';
<% } %>

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <% if(redux) { %>
        <Provider store={store}>
            <Container />
        </Provider>
        <% } else { %>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <% if(auth) { %>
                <Route path="/signin" element={<Signin />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signin />} />
                <Route path="/register" element={<Signin />} />
                <% } %>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <% } %>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
