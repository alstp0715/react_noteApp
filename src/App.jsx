import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Listview from './views/ListView.jsx'
import DetailView from './views/DetailView.jsx'

const App = () => {
    return (
        <section className="wrap">
            <div className="box">
                <h1 className="title">NoteApp</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Listview />} />
                        <Route path="/detail" element={<DetailView />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </section>
    )
}

export default App
