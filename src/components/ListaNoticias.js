import React from "react";
import Noticia from "./Noticia";


  const ListaNoticias = (props) => {
    return (
    <div className="list">
        <ul className="list-group d-flex flex-column">
            {props.noticias.length > 0 ? (
                props.noticias.map((noticias)=>{
                    return <Noticia noticias={noticias}/>;
                })
            ) :(
                <li className="list-group-item">
                    <p></p>
                </li>
                
            )}
        </ul>
    </div>);
  };


export default ListaNoticias;