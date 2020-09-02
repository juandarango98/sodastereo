import React from "react";

import "./Home.css";
import YouTube from "@u-wave/react-youtube";
import image from "./images/dog.png";
const Home = () => {
  const gente = [1, 2, 3];
  function renderGente() {
    let list = [];
    gente.forEach((persona) => {
      list.push(
        <div className="intro intro-carousel">
          <div id="carousel" className="owl-carousel owl-theme">
            <div className="carousel-item-a intro-item bg-image" style={{}}>
              <h1 className="subtitulo">
                <span className="color-b">1982</span>
              </h1>
              <h1 className="fechas">
                <span className="color-b">El primer demo</span>
              </h1>
              <img src={image}></img>

              <section className="section-services" id="descripcion">
                <div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-box-c foo">
                        <div className="card-body-c">
                          <div>
                            <p className="textoInfo">
                              De esa primerísima época data un demo en donde
                              grabó guitarras Richard Coleman que fue integrante
                              oficial de la banda durante muy poco tiempo en
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    });
    return list;
  }
  return (
    <div className="Home">
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://www.notelyrics.com/images/G/Gustavo%20Cerati/Gustavo%20Cerati_11.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <h1 className="titulo mb-4">
              <span className="color-b">Presentacion Vale </span>
            </h1>
          </div>
        </div>
      </div>
      {renderGente()}
    </div>
  );
};

export default Home;
