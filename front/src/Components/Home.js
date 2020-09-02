import React from "react";

import "./Home.css";
import YouTube from "@u-wave/react-youtube";

const Home = () => {
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
              <span className="color-b">Soda Stereo </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://wallpapercave.com/wp/wp2023205.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <h1 className="titulo mb-4">
              <span className="color-b">Inicios </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundColor: "#1b2432",
            }}
          >
            <h1 className="subtitulo">
              <span className="color-b">1980</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b"></span>
            </h1>

            <section className="section-services " id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <p className="textoInfo">
                          A comienzos de los años 1980, Gustavo Cerati, de 22
                          años, y Héctor (Zeta) Bosio, de 23 años, compartían
                          los mismos gustos y sueños musicales y comenzaron una
                          búsqueda para integrar un grupo punk rock inspirado en
                          The Police, que visitó Argentina en 1980, y The Cure,
                          con temas propios en español. Primero, Cerati se
                          integró a The Morgan y luego formaron sucesivamente el
                          grupo Stress, junto a Charly Amato, Sandra Baylac y el
                          baterista Pablo Guadalupe, y Proyecto Erekto junto a
                          Andrés Calamaro, que no cubrieron sus expectativas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image" style={{}}>
            <h1 className="subtitulo">
              <span className="color-b">1982</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b"></span>
            </h1>

            <section className="section-services " id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            En el verano de 1982, ambos coincidieron en Punta
                            del Este (Uruguay): Cerati con su grupo Sauvage18​ y
                            Bosio con The Morgan. Debido a una serie de
                            peripecias, Cerati y Bosio establecieron un estrecho
                            vínculo musical y de amistad que los llevó a
                            comenzar a tocar juntos. Por entonces Carlos
                            Ficcichia, nombre legal de Charly Alberti, llamaba
                            insistentemente por teléfono a María Laura Cerati,
                            la hermana de Gustavo a quien había conocido en las
                            piletas de River Plate, para invitarla a salir En
                            una oportunidad fue Gustavo quien atendió una
                            llamada de Charly para su hermana y entablaron una
                            conversación de compromiso en la que Carlos contó
                            que tocaba la batería y que era hijo de un famoso
                            baterista de jazz, Tito Alberti.​ A la semana,
                            Gustavo y Zeta decidieron visitar a Charly Alberti
                            para escucharlo tocar en la batería de su padre. La
                            banda quedó formada.
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
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://wallpapercave.com/wp/wp2023168.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <h1 className="titulo mb-4">
              <span className="color-b">Primeras </span>canciones
            </h1>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image" style={{}}>
            <h1 className="subtitulo">
              <span className="color-b">1982</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">El primer demo</span>
            </h1>

            <section className="section-services" id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            De esa primerísima época data un demo en donde grabó
                            guitarras Richard Coleman que fue integrante oficial
                            de la banda durante muy poco tiempo en aquellos días
                            de 1982. Los temas del demo fueron los siguientes:
                            «¿Por qué no puedo ser del Jet-Set?», «Dime
                            Sebastián» y «Debo soñar»
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <YouTube
              video="xTtR4ZDzZqw"
              allowFullscreen={true}
              height={"40%"}
              width={"40%"}
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image" style={{}}>
            <h1 className="subtitulo">
              <span className="color-b">1983</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">Primera presetación en vivo</span>
            </h1>

            <section className="section-services section-t8" id="descripcion">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <div>
                      <p className="textoInfo">
                        En julio de 1983, debutaron en público en la Discoteque
                        Airport, en el barrio de Nuñez, en Buenos Aires. A
                        partir de ese momento Soda Stereo comenzó a recorrer el
                        circuito underground de Buenos Aires haciéndose conocer
                        junto a otras bandas emergentes como Sumo, Los Twist,
                        Los Encargados de Daniel Melero, etc., instalándose como
                        banda estable en el tradicional y deteriorado cabaré
                        Marabú,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://www.sodastereo.com/files/albums/soda-stereo.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <h1 className="titulo mb-4">
              <span className="color-b">Primer álbum </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image" style={{}}>
            <h1 className="subtitulo">
              <span className="color-b">1984</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">El primer álbum</span>
            </h1>

            <section className="section-services" id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            En 1984, la banda presentó su primer álbum 'Soda
                            Stereo', un álbum de rock, muy exitoso del cual
                            salieron algunas de las mejores canciones de la
                            banda.Con la salida del álbum, hubo muchas
                            reacciones ante la letra de 'Dietético': 'Somos un
                            conjunto dietético, buscando el paraíso estético,
                            Nuestra música es dietética. Hace adelgazar
                            comiendo, pero ante cualquier duda consulte a su
                            médico. Tratamos de mantener los cuerpos sanos y las
                            mentes desaceleradas.'
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <YouTube
              video="WAL3zZZjqG0"
              allowFullscreen={true}
              height={"40%"}
              width={"40%"}
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image">
            <h1 className="subtitulo">
              <span className="color-b">1984</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">El primer álbum</span>
            </h1>

            <section className="section-services" id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            Estas son algunoas de las canciones del primer
                            album: 'Trátame Suavemente','Sobredosis de Tv',
                            'Tele-ka' y 'Te hacen falta vitaminas'.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="UPVfQKUHTSc"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="AtQSF-JVR7o"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="NKVLl4c35j4"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="G0xLD2stayM"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={{
              backgroundImage: `url(https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2015/11/19/sodastereo.jpg)`,
            }}
          >
            <div className="overlay overlay-a"></div>
            <h1 className="titulo mb-4">
              <span className="color-b"> </span>Nada personal
            </h1>
          </div>
        </div>
      </div>

      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image" style={{}}>
            <h1 className="subtitulo">
              <span className="color-b">1985</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">El segundo álbum</span>
            </h1>

            <section className="section-services" id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            En 1985, la banda presentó su segundo álbum 'Nada
                            Personal',
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <YouTube
              video="WAL3zZZjqG0"
              allowFullscreen={true}
              height={"40%"}
              width={"40%"}
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div className="carousel-item-a intro-item bg-image">
            <h1 className="subtitulo">
              <span className="color-b">1984</span>
            </h1>
            <h1 className="fechas">
              <span className="color-b">El primer álbum</span>
            </h1>

            <section className="section-services" id="descripcion">
              <div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-box-c foo">
                      <div className="card-body-c">
                        <div>
                          <p className="textoInfo">
                            Estas son algunoas de las canciones del primer
                            album: 'Trátame Suavemente','Sobredosis de Tv',
                            'Tele-ka' y 'Te hacen falta vitaminas'.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="UPVfQKUHTSc"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="AtQSF-JVR7o"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="NKVLl4c35j4"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="divVideo">
                    <YouTube
                      video="G0xLD2stayM"
                      allowFullscreen={true}
                      height={"90%"}
                      width={"90%"}
                      style={{ borderRadius: "30px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
