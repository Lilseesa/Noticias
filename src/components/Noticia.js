import React from "react";

const Noticia = (props) => {
  const { urlToImage, url, title, description, source } = props.noticias;

  return (
    <div className="col s6 l4">
      <div className="card">   
        <div className="card-image">
          <img className="list-img-top img-fluid" src={urlToImage} alt={title}></img>
          <span className="card-title">{source.name}</span>
        </div>

        <div className="card-content">
          <h3 className="list-title">{title}</h3>
          <p className="list-text">{description}</p>
        </div>

        <div className="card-action">
          <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;