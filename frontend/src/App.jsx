import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import TeacherDetail from './pages/TeacherDetail';
import Students from './pages/Students';
import Library from './pages/Library';
import Programs from './pages/Programs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/students" element={<Students />} />
            <Route path="/library" element={<Library />} />
            <Route path="/programs" element={<Programs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
