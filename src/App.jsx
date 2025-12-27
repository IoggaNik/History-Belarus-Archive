import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MainForm from './components/Forms/MainForm';
import Header from './components/Header/Header';
import Section from './components/HeroesPreview/Section';
import MapHeroes from './components/Map/MapHeroes';
import FormContext from './components/contexts/formContexts/FormContext';
import Footer from './components/Footer/Footer';
import Archive from './components/ArchivePage/Archive';
import ScrollToTop from './components/ScrollToTop';
import Scroller from './components/PhotosScroller/Scroller';

const App = () => {
    const [fullName, setFullName] = useState('');

    return (
        <>
            <Router>
                <FormContext.Provider value={{ fullName, setFullName }}>
                    <ScrollToTop />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <Section />
                                    <Scroller />
                                    <MapHeroes />
                                    <MainForm />
                                    <Footer />
                                </>
                            }
                        />

                        <Route path="/archive" element={<Archive />} />
                    </Routes>
                </FormContext.Provider>
            </Router>
        </>
    );
};

export default App;