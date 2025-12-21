import { useState } from "react";
import MainForm from "./components/Forms/MainForm";
import Header from "./components/Header/Header";
import Section from "./components/HeroesPreview/Section";
import MapHeroes from "./components/Map/MapHeroes";
import FormContext from './components/contexts/formContexts/FormContext'

const App = () => {
    const [fullName, setFullName] = useState('');

    return (
        <FormContext.Provider value={{ fullName, setFullName }}>
            <Header />
            <Section />
            <MapHeroes />
            <MainForm />
        </FormContext.Provider>
    );
};

export default App;