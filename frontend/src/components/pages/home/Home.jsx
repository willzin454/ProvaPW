import React from "react";
import Header from "../../header/Header";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const formPage = () => {
        navigate("/formulario");
    };

    return (
        <div>
            <Header />
            <h2>Olá, acessado no dia {new Date().toLocaleDateString()} às {new Date().toLocaleTimeString()}</h2>
            <Button label="Realizar o Cálculo de investimento" onClick={formPage} />
        </div>
    );
};

export default Home;
