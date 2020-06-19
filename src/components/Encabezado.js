import React from 'react';

const Encabezado = (props) => {
    return <div className="header"><h1 className="header-title text-center ">{props.title}</h1></div>
};

export default Encabezado;