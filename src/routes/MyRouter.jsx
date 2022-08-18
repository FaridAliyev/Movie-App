import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';
import MovieDetail from '../pages/MovieDetail/MovieDetail'

function MyRouter() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='movie/:id' element={<MovieDetail />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default MyRouter