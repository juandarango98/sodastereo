import React from "react";

import "./Home.css";
import YouTube from "@u-wave/react-youtube";
import image from "./images/dog ho.png";
import intro from "./images/intro.png";
const Home = () => {
  const gente = [
    {
      PRIMER_APELLIDO: "TRIAS",
      SEGUNDO_APELLIDO: "CHAVEZ",
      NOMBRE: "ALEJANDRA",
      CARGO: "ANALISTA DE DESARROLLO DE NEGOCIO",
      Foto: "AlejandraTrias.jpg",
    },
    {
      PRIMER_APELLIDO: "HERNANDEZ",
      SEGUNDO_APELLIDO: "BUITRAGO",
      NOMBRE: "ANA MARIA",
      CARGO: "Planta",
      Foto: "AnaMariaHernandez.jpg",
    },
    {
      PRIMER_APELLIDO: "BELEÑO",
      SEGUNDO_APELLIDO: "HENAO",
      NOMBRE: "ANDREA",
      CARGO: "GERENTE CATEGORY MANAGEMENT JR",
      Foto: "AndreaBeleño.jpg",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "CANO",
      NOMBRE: "ANDREA PATRICIA",
      CARGO: "ANALISTA DE TESORERÍA",
      Foto: "AndreaPatriciaRodriguez.jpg",
    },
    {
      PRIMER_APELLIDO: "ARANGO",
      NOMBRE: "ANDRES",
      CARGO: "GERENTE DE COSTUMER CARE",
      Foto: "AndresArango.jpg",
    },
    {
      PRIMER_APELLIDO: "PARRA",
      SEGUNDO_APELLIDO: "JIMENEZ",
      NOMBRE: "ANGELA PATRICIA",
      CARGO: "GERENTE DE IMPUESTOS",
      Foto: "AngelaPatriciaParra.jpg",
    },
    {
      PRIMER_APELLIDO: "ROLAND",
      SEGUNDO_APELLIDO: "BERMUDEZ",
      NOMBRE: "CAMILA ANDREA",
      CARGO: "ANALISTA DE CPFR",
      Foto: "CamilaAndreaRoland.jpg",
    },
    {
      PRIMER_APELLIDO: "AREVALO",
      SEGUNDO_APELLIDO: "PANCHE",
      NOMBRE: "CAMILO ANDRES",
      CARGO: "JEFE DE PRODUCTO",
      Foto: "CamiloAndresArevalo.png",
    },
    {
      PRIMER_APELLIDO: "GOMEZ",
      SEGUNDO_APELLIDO: "GUEVARA",
      NOMBRE: "CAMILO ANDRES",
      CARGO: "ANALISTA DE CARTERA SR.",
      Foto: "CamiloAndresGomez.jpg",
    },
    {
      PRIMER_APELLIDO: "SEPULVEDA",
      SEGUNDO_APELLIDO: "CAÑIZARES",
      NOMBRE: "CARLOS MAURICIO",
      CARGO: "ANALISTA DE  CONTROL GESTION SR",
      Foto: "CarlosMauricioSepulveda.jpg",
    },
    {
      PRIMER_APELLIDO: "LEON",
      SEGUNDO_APELLIDO: "HERNANDEZ",
      NOMBRE: "CRISTIAN CAMILO",
      CARGO: "JEFE DE OPERACIONES",
      Foto: "CristianCamiloLeon.jpg",
    },
    {
      PRIMER_APELLIDO: "HERNANDEZ",
      SEGUNDO_APELLIDO: "ERZISNIK",
      NOMBRE: "DANA MARIA",
      CARGO: "ANALISTA DE MARKETING",
      Foto: "DanaMariaHernandez.JPG",
    },
    {
      PRIMER_APELLIDO: "PERDOMO",
      NOMBRE: "DANIEL",
      CARGO: "GERENTE DE HSE",
      Foto: "DanielPerdomo.jpg",
    },
    {
      PRIMER_APELLIDO: "VIELMA",
      SEGUNDO_APELLIDO: "CALATAYUD",
      NOMBRE: "DANIEL EDUARDO",
      CARGO: "ANALISTA DE CONTROL GESTIÓN",
      Foto: "DanielEduardoVielma.jpg",
    },

    {
      PRIMER_APELLIDO: "HERNANDEZ",
      SEGUNDO_APELLIDO: "PANTOJA",
      NOMBRE: "DANIEL ESTEBAN",
      CARGO: "AUXILIAR CARTERA",
      Foto: "DanielEstebanHernandez.jpg",
    },
    {
      PRIMER_APELLIDO: "NARVAEZ",
      SEGUNDO_APELLIDO: "NUÑEZ",
      NOMBRE: "DANIEL FELIPE",
      CARGO: "JEFE DIGITAL",
      Foto: "DanielFelipeNarvaez.jpg",
    },
    {
      PRIMER_APELLIDO: "GALINDO",
      SEGUNDO_APELLIDO: "CANO",
      NOMBRE: "DANIELA",
      CARGO: "KEY ACCOUNT MANAGER",
      Foto: "DanielaGalindo.jpg",
    },
    {
      PRIMER_APELLIDO: "GONZALEZ",
      SEGUNDO_APELLIDO: "OSORIO",
      NOMBRE: "DANIELA",
      CARGO: "KEY ACCOUNT MANAGER DIGITAL JR",
      Foto: "DanielaGonzalez.jpg",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "GARCIA",
      NOMBRE: "DELMER GILBERTO",
      CARGO: "Planta",
      Foto: "DelmerGilbertoRodriguez.jpg",
    },
    {
      PRIMER_APELLIDO: "BARRERA",
      SEGUNDO_APELLIDO: "CASTRO",
      NOMBRE: "DIEGO",
      CARGO: "Planta",
      Foto: "DiegoBarrera.jpg",
    },
    {
      PRIMER_APELLIDO: "HURTADO",
      SEGUNDO_APELLIDO: "GOMEZ",
      NOMBRE: "EDGAR ANDRES",
      CARGO: "COORDINADOR DE CONTROL GESTIÓN",
      Foto: "EdgarAndresHurtado.jpg",
    },
    {
      PRIMER_APELLIDO: "TORRES",
      NOMBRE: "EDWIN ANDRES",
      CARGO: "Planta",
      Foto: "EdwinAndresTorres.jpg",
    },
    {
      PRIMER_APELLIDO: "CAICEDO",
      SEGUNDO_APELLIDO: "CLAVIJO",
      NOMBRE: "EDWIN JOHAN",
      CARGO: "Planta",
      Foto: "EdwinJohanCaicedo.jpg",
    },
    {
      PRIMER_APELLIDO: "BENAVIDES",
      SEGUNDO_APELLIDO: "DUQUE",
      NOMBRE: "FELIPE",
      CARGO: "ANALISTA DE MERCHANDISING SR.",
      Foto: "FelipeBenavides.jpg",
    },
    {
      PRIMER_APELLIDO: "BAUTISTA",
      SEGUNDO_APELLIDO: "NIÑO",
      NOMBRE: "FERNANDO ANDRES",
      CARGO: "GERENTE DE DISTRIBUCION",
      Foto: "FernandoAndresBautista.jpg",
    },
    {
      PRIMER_APELLIDO: "CANO",
      SEGUNDO_APELLIDO: "MEJIA",
      NOMBRE: "IRENE",
      CARGO: "GERENTE DE INTELIGENCIA COMERCIAL",
      Foto: "IreneCano.jpg",
    },
    {
      PRIMER_APELLIDO: "SUAREZ",
      SEGUNDO_APELLIDO: "MAYORGA",
      NOMBRE: "ISABEL CRISTINA",
      CARGO: "ANALISTA DE DISEÑO GRAFICO",
      Foto: "IsabelCristinaSuarez.jpg",
    },
    {
      PRIMER_APELLIDO: "ARTUNDUAGA",
      SEGUNDO_APELLIDO: "VIVAS",
      NOMBRE: "IVONNE CRISTINA",
      CARGO: "VISITADOR MÉDICO",
      Foto: "IvonneCristinaArtunduaga.jpg",
    },
    {
      PRIMER_APELLIDO: "CASTAÑO",
      SEGUNDO_APELLIDO: "JIMENEZ",
      NOMBRE: "JAIME ANDRES",
      CARGO: "ANALISTA DE CUSTOMER CARE",
      Foto: "JaimeAndresCastaño.jpg",
    },
    {
      PRIMER_APELLIDO: "MORA",
      SEGUNDO_APELLIDO: "SALDANA",
      NOMBRE: "JAVIER ALEXANDER",
      CARGO: "JEFE DE ADMINISTRACIÓN DE REDES",
      Foto: "JavierAlexanderMora.jpg",
    },
    {
      PRIMER_APELLIDO: "BERNAL",
      SEGUNDO_APELLIDO: "FONSECA",
      NOMBRE: "JEIMMY LORENA",
      CARGO: "ANALISTA DE CREDITO",
      Foto: "JeimmyLorenaBernal.jpg",
    },
    {
      PRIMER_APELLIDO: "ROJAS",
      SEGUNDO_APELLIDO: "BRAVO",
      NOMBRE: "JENNY PAOLA",
      CARGO: "AUXILIAR CARTERA",
      Foto: "JennyPaolaRojas.jpeg",
    },
    {
      PRIMER_APELLIDO: "RAMIREZ",
      SEGUNDO_APELLIDO: "PULIDO",
      NOMBRE: "JOHANNA FERNANDA",
      CARGO: "ANALISTA DE DMI",
      Foto: "JohannaFernandaRamirez.jpg",
    },
    {
      PRIMER_APELLIDO: "HERNANDEZ",
      SEGUNDO_APELLIDO: "VALENZUELA",
      NOMBRE: "JONATHAN ALEXANDER",
      CARGO: "ANALISTA ADMINISTRACION COMERCIAL",
      Foto: "JonathanAlexanderHernandez.jpg",
    },
    {
      PRIMER_APELLIDO: "MOLINA",
      SEGUNDO_APELLIDO: "ANGEL",
      NOMBRE: "JONATHAN DAVID",
      CARGO: "ANALISTA DE NOTAS CRÉDITO",
      Foto: "JonathanDavidMolina.jpg",
    },
    {
      PRIMER_APELLIDO: "NARANJO ",
      SEGUNDO_APELLIDO: "ALFONSO",
      NOMBRE: "JUAN  PABLO",
      CARGO: "DIRECTOR DE DESARROLLO DE NEGOCIOS",
      Foto: "JuanPabloNaranjo.jpg",
    },
    {
      PRIMER_APELLIDO: "GUTIERREZ",
      SEGUNDO_APELLIDO: "BARAHONA",
      NOMBRE: "JUAN CAMILO",
      CARGO: "ANALISTA DE PLANEACIÓN DE LA DEMANDA",
      Foto: "JuanCamiloGutierrez.jpg",
    },
    {
      PRIMER_APELLIDO: "BAUTISTA",
      SEGUNDO_APELLIDO: "PEÑARANDA",
      NOMBRE: "JUAN DAVID",
      CARGO: "Planta",
      Foto: "JuanDavidBautista.jpg",
    },
    {
      PRIMER_APELLIDO: "SUAREZ",
      SEGUNDO_APELLIDO: "DAZA",
      NOMBRE: "JUAN DAVID",
      CARGO: "Planta",
      Foto: "JuanDavidSuarez.jpg",
    },
    {
      PRIMER_APELLIDO: "CABRERA",
      SEGUNDO_APELLIDO: "ORTEGA",
      NOMBRE: "JUAN DIEGO",
      CARGO: "ANALISTA DE CONTROL GESTIÓN",
      Foto: "JuanDiegoCabrera.jpg",
    },
    {
      PRIMER_APELLIDO: "ORTIZ",
      SEGUNDO_APELLIDO: "DEL VALLE",
      NOMBRE: "JUAN RICARDO",
      CARGO: "Planta",
      Foto: "JuanRicardoOrtiz.jpg",
    },
    {
      PRIMER_APELLIDO: "LOPEZ",
      SEGUNDO_APELLIDO: "MC CORMICK",
      NOMBRE: "JULIAN EDUARDO",
      CARGO: "ANALISTA DIGITAL",
      Foto: "JulianEduardoLopez.jpg",
    },
    {
      PRIMER_APELLIDO: "GALINDO",
      SEGUNDO_APELLIDO: "BONELO",
      NOMBRE: "JULIANA",
      CARGO: "ANALISTA DE MARKETING",
      Foto: "JulianaGalindo.jpg",
    },
    {
      PRIMER_APELLIDO: "CUARTAS",
      SEGUNDO_APELLIDO: "MONTOYA",
      NOMBRE: "JULIANA",
      CARGO: "KEY ACCOUNT MANAGER",
      Foto: "JulianaCuartas.jfif",
    },
    {
      PRIMER_APELLIDO: "SANDOVAL",
      SEGUNDO_APELLIDO: "RODRIGUEZ",
      NOMBRE: "JULIE TATIANA",
      CARGO: "Planta",
      Foto: "JulieTatianaSandoval.jpg",
    },
    {
      PRIMER_APELLIDO: "NEIRA",
      SEGUNDO_APELLIDO: "RIOS",
      NOMBRE: "JULY KATHERINE",
      CARGO: "COORDINADOR DE CONTROL GESTIÓN",
      Foto: "JulyKatherineNeira.jpeg",
    },
    {
      PRIMER_APELLIDO: "VELOSA",
      SEGUNDO_APELLIDO: "MORENO",
      NOMBRE: "KAREN YOVANNA",
      CARGO: "Planta",
      Foto: "KarenYovannaVelosa.jpg",
    },
    {
      PRIMER_APELLIDO: "LOPEZ",
      SEGUNDO_APELLIDO: "GOMEZ",
      NOMBRE: "KATHERINE",
      CARGO: "Planta",
      Foto: "KatherineLopez.jpg",
    },
    {
      PRIMER_APELLIDO: "MATAMOROS",
      SEGUNDO_APELLIDO: "FIALLO",
      NOMBRE: "LAURA ALEJANDRA",
      CARGO: "ANALISTA DE MARKETING",
      Foto: "LauraAlejandraMatamoros.jpeg",
    },
    {
      PRIMER_APELLIDO: "GOMEZ",
      SEGUNDO_APELLIDO: "CORDERO",
      NOMBRE: "LAURA DANIELA",
      CARGO: "ANALISTA DE CONTROL GESTIÓN",
      Foto: "LauraDanielaGomez.jpg",
    },
    {
      PRIMER_APELLIDO: "LONDOÑO",
      SEGUNDO_APELLIDO: "MORA",
      NOMBRE: "LAURA INES",
      CARGO: "GERENTE DE CONTROL DE GESTION DCA & DPP",
      Foto: "LauraInesLondoño.jpg",
    },
    {
      PRIMER_APELLIDO: "CAPADOR",
      SEGUNDO_APELLIDO: "ANDRADE",
      NOMBRE: "LEIDY JOHAN",
      CARGO: "Planta",
      Foto: "LeidyJohanCapador.jpg",
    },
    {
      PRIMER_APELLIDO: "CASTAÑEDA",
      SEGUNDO_APELLIDO: "POVEDA",
      NOMBRE: "LILIANA",
      CARGO: "AUXILIAR CARTERA",
      Foto: "LilianaCastañeda.jpg",
    },
    {
      PRIMER_APELLIDO: "NAVAS",
      SEGUNDO_APELLIDO: "RODRIGUEZ",
      NOMBRE: "LINA MARIA",
      CARGO: "ANALISTA DE TRADE MARKETING",
      Foto: "LinaMariaNavas.jpg",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "AVILA",
      NOMBRE: "LUIS ENRIQUE",
      CARGO: "ANALISTA DE INVENTARIOS",
      Foto: "LuisEnriqueRodriguez.jpg",
    },
    {
      PRIMER_APELLIDO: "RUBIO",
      SEGUNDO_APELLIDO: "MENESES",
      NOMBRE: "LUISA FERNANDA",
      CARGO: "ANALISTA DE CONTROL GESTIÓN",
      Foto: "LuisaFernandaRubio.JPG",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "RUSINQUE",
      NOMBRE: "MAGDA CAROLINA",
      CARGO: "COORDINADOR APLICACIONES IT",
      Foto: "MagdaCarolinaRodriguez.jpg",
    },
    {
      PRIMER_APELLIDO: "MORA",
      SEGUNDO_APELLIDO: "VELEZ",
      NOMBRE: "MARIA",
      CARGO: "ANALISTA DE RECURSOS HUMANOS",
      Foto: "MariaMora.jpeg",
    },
    {
      PRIMER_APELLIDO: "CRISTANCHO",
      SEGUNDO_APELLIDO: "CASTRO",
      NOMBRE: "MARIA CAMILA",
      CARGO: "ANALISTA DE TRADE MARKETING",
      Foto: "MariaCamilaCristancho.jpg",
    },
    {
      PRIMER_APELLIDO: "TAMAYO",
      SEGUNDO_APELLIDO: "BETANCUR",
      NOMBRE: "MARIA CAROLINA",
      CARGO: "VISITADOR MÉDICO",
      Foto: "MariaCarolinaTamayo.JPG",
    },
    {
      PRIMER_APELLIDO: "TELLEZ",
      SEGUNDO_APELLIDO: "RUBIO",
      NOMBRE: "MARIA ISABEL",
      CARGO: "JEFE DE RELACIONES LABORALES",
      Foto: "MariaIsabelTellez.png",
    },
    {
      PRIMER_APELLIDO: "CASTRO",
      SEGUNDO_APELLIDO: "BUENO",
      NOMBRE: "MARIA JULIANA",
      CARGO: "Planta",
      Foto: "MariaJulianaCastro.jpg",
    },
    {
      PRIMER_APELLIDO: "DOMINGUEZ",
      SEGUNDO_APELLIDO: "ESCALANTE",
      NOMBRE: "MARIAJOSE COROMOTO",
      CARGO: "ANALISTA DE MARKETING",
      Foto: "MariajoseCoromotoDominguez.jpg",
    },
    {
      PRIMER_APELLIDO: "CASTELLANOS",
      SEGUNDO_APELLIDO: "ROMERO",
      NOMBRE: "MARLON FABIAN",
      CARGO: "ANALISTA DE CREDITO",
      Foto: "MarlonFabianCastellanos.jpg",
    },
    {
      PRIMER_APELLIDO: "MARTINEZ",
      SEGUNDO_APELLIDO: "PAVA",
      NOMBRE: "MARTHA ELENA",
      CARGO: "FORMADOR",
      Foto: "MarthaElenaMartinez.jpg",
    },
    {
      PRIMER_APELLIDO: "SERNA",
      SEGUNDO_APELLIDO: "CALDERON",
      NOMBRE: "MATEO",
      CARGO: "KEY ACCOUNT MANAGER JUNIOR",
      Foto: "MateoSerna.jpg",
    },
    {
      PRIMER_APELLIDO: "HIDALGO",
      SEGUNDO_APELLIDO: "PRADA",
      NOMBRE: "MATEO",
      CARGO: "ANALISTA DE PLANEACIÓN DE LA DEMANDA",
      Foto: "MateoHidalgo.jpg",
    },
    {
      PRIMER_APELLIDO: "MUÑOZ",
      SEGUNDO_APELLIDO: "VALENCIA",
      NOMBRE: "MAURICIO",
      CARGO: "FORMADOR",
      Foto: "MauricioMuñoz.png",
    },
    {
      PRIMER_APELLIDO: "ESPEJO",
      SEGUNDO_APELLIDO: "CALDERON",
      NOMBRE: "MONICA AYDU",
      CARGO: "ANALISTA DE COMPRAS",
      Foto: "MonicaAyduEspejo.jpg",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "ORTIZ",
      NOMBRE: "MONICA JOHANNA",
      CARGO: "DIRECTOR COMERCIAL Y VISITA MEDICA",
      Foto: "MonicaJohannaRodriguez.png",
    },
    {
      PRIMER_APELLIDO: "ALONSO",
      SEGUNDO_APELLIDO: "ESCOVAR",
      NOMBRE: "NATALIA",
      CARGO: "ANALISTA DE MERCHANDISING",
      Foto: "NataliaAlonso.jpg",
    },
    {
      PRIMER_APELLIDO: "GOMEZ",
      SEGUNDO_APELLIDO: "VASQUEZ",
      NOMBRE: "NATALIA CAROLINA",
      CARGO: "COORDINADOR DE CUSTOMER CARE",
      Foto: "NataliaCarolinaGomez.jpg",
    },
    {
      PRIMER_APELLIDO: "BUITRAGO ",
      SEGUNDO_APELLIDO: "QUINTERO",
      NOMBRE: "NATHALY",
      CARGO: "COORDINADOR DERMOCONSEJO",
      Foto: "NathalyBuitrago.jpg",
    },
    {
      PRIMER_APELLIDO: "CORTES",
      SEGUNDO_APELLIDO: "RIVERA",
      NOMBRE: "NESTOR",
      CARGO: "Planta",
      Foto: "NestorCortes.jpg",
    },
    {
      PRIMER_APELLIDO: "ALARCON",
      NOMBRE: "NESTOR ORLANDO",
      CARGO: "Planta",
      Foto: "NestorOrlandoAlarcon.jpg",
    },
    {
      PRIMER_APELLIDO: "ARIZA",
      SEGUNDO_APELLIDO: "POLO",
      NOMBRE: "NINI JOHANA",
      CARGO: "AUXILIAR CARTERA",
      Foto: "NiniJohanaAriza.jpg",
    },
    {
      PRIMER_APELLIDO: "BELLO",
      SEGUNDO_APELLIDO: "GOMEZ",
      NOMBRE: "OMAR GUSTAVO",
      CARGO: "ANALISTA DE CATEGORY MANAGEMENT",
      Foto: "OmarGustavoBello.jpg",
    },
    {
      PRIMER_APELLIDO: "MARTINEZ",
      SEGUNDO_APELLIDO: "NIETO",
      NOMBRE: "ROCIO DEL PILAR",
      CARGO: "FORMADOR",
      Foto: "RocioDelPilarMartinez.jpg",
    },
    {
      PRIMER_APELLIDO: "MOLANO",
      SEGUNDO_APELLIDO: "ROJAS",
      NOMBRE: "ROGER OSWALDO",
      CARGO: "ANALISTA DE ADMINISTRACIÓN COMERCIAL JR.",
      Foto: "RogerOswaldoMolano.jpg",
    },
    {
      PRIMER_APELLIDO: "RIAÑO ",
      SEGUNDO_APELLIDO: "LOZANO",
      NOMBRE: "SANDRA YULIETH",
      CARGO: "Planta",
      Foto: "SandraYuliethRiaño.jpg",
    },
    {
      PRIMER_APELLIDO: "SANCHEZ",
      SEGUNDO_APELLIDO: "CASTAÑO",
      NOMBRE: "SANTIAGO",
      CARGO: "ANALISTA DE DISEÑO GRAFICO",
      Foto: "SantiagoSanchez.jpg",
    },
    {
      PRIMER_APELLIDO: "OSPINA",
      SEGUNDO_APELLIDO: "SILVA",
      NOMBRE: "SERGIO",
      CARGO: "Planta",
      Foto: "SergioOspina.jpg",
    },
    {
      PRIMER_APELLIDO: "RODRIGUEZ",
      SEGUNDO_APELLIDO: "MEJIA",
      NOMBRE: "STIP LEONARDO",
      CARGO: "COORDINADOR DE CONTROL GESTIÓN",
      Foto: "StipLeonardoRodriguez.jpg",
    },
    {
      PRIMER_APELLIDO: "ARIZA",
      SEGUNDO_APELLIDO: "ALFONSO",
      NOMBRE: "TATIANA DEL PILAR",
      CARGO: "KEY ACCOUNT MANAGER JUNIOR",
      Foto: "TatianaDelPilarAriza.jpg",
    },
    {
      PRIMER_APELLIDO: "GOMEZ",
      NOMBRE: "VANESSA",
      CARGO: "BRAND BUSINESS LEADER",
      Foto: "VanessaGomez.jpeg",
    },
    {
      PRIMER_APELLIDO: "SAAVEDRA",
      SEGUNDO_APELLIDO: "CORREDOR",
      NOMBRE: "WILDER JULIAN",
      CARGO: "ANALISTA DE DATOS MAESTROS",
      Foto: "WilderJulianSaavedra.jpg",
    },
    {
      PRIMER_APELLIDO: "MANJARREZ",
      SEGUNDO_APELLIDO: "LINAREZ",
      NOMBRE: "WILMER",
      CARGO: "ANALISTA DE CUSTOMER CARE",
      Foto: "WilmerManjarrez.jpeg",
    },
    {
      PRIMER_APELLIDO: "ROA",
      SEGUNDO_APELLIDO: "IZQUIERDO",
      NOMBRE: "WILSON GERARDO",
      CARGO: "AUXILIAR CARTERA",
      Foto: "WilsonGerardoRoa.jpg",
    },
    {
      PRIMER_APELLIDO: "GUTIERREZ",
      SEGUNDO_APELLIDO: "ARGUELLO",
      NOMBRE: "YANETH ROCIO",
      CARGO: "Planta",
      Foto: "YanethRocioGutierrez.jpg",
    },
    {
      PRIMER_APELLIDO: "BELLO",
      SEGUNDO_APELLIDO: "CASTRO",
      NOMBRE: "YEISON DARIO",
      CARGO: "ANALISTA DE CONTROL GESTIÓN",
      Foto: "YeisonDarioBello.jpg",
    },
    {
      PRIMER_APELLIDO: "PERAFAN",
      SEGUNDO_APELLIDO: "VILLALBA",
      NOMBRE: "YUDI ALEJANDRA",
      CARGO: "ANALISTA DE ADMINISTRACIÓN COMERCIAL JR.",
      Foto: "YudiAlejandraPerafan.jpg",
    },
    {
      PRIMER_APELLIDO: "BEJARANO",
      SEGUNDO_APELLIDO: "PEÑA",
      NOMBRE: "YURI KATHERINE",
      CARGO: "ANALISTA DE TESORERÍA",
      Foto: "YuriKatherineBejarano.jpg",
    },
    {
      PRIMER_APELLIDO: "ROMERO",
      NOMBRE: "ALBER MAURICIO",
      CARGO: "ANALISTA DE CONTABILIDAD",
      Foto: "AlberMauricioRomero.jpg",
    },
    {
      PRIMER_APELLIDO: "MORA",
      NOMBRE: "VICTOR",
      CARGO: "GERENTE DE INFRAESTRUCTURA",
      Foto: "VictorMora.jpg",
    },
    {
      PRIMER_APELLIDO: "GUEVARA",
      NOMBRE: "SERGIO",
      CARGO: "JEFE DE DESARROLLO DE NEGOCIOS",
      Foto: "SergioGuevara.jpg",
    },
    {
      PRIMER_APELLIDO: "BARONA",
      NOMBRE: "VIVIANA",
      CARGO: "DIRECTOR COMERCIAL    ",
      Foto: "VivianaBarona.jpg",
    },
    {
      PRIMER_APELLIDO: "NIÑO ",
      SEGUNDO_APELLIDO: "FORERO",
      NOMBRE: "LUIS FERNANDO",
      CARGO: "JEFE POLE",
      Foto: "LuisFernandoNiño.jpg",
    },
    {
      PRIMER_APELLIDO: "TOPA ",
      SEGUNDO_APELLIDO: "GALLARDO",
      NOMBRE: "GUILLERMO NICOLÁS",
      CARGO: "ANALISTA DE CONTROL GESTIÓN ",
      Foto: "GuillermoNicolásTopa.jpg",
    },
  ];
  function renderImg(persona) {
    try {
      require("./images/" + persona.Foto);
      return (
        <img
          className="imagenCont"
          src={require("./images/" + persona.Foto)}
        ></img>
      );
    } catch (error) {
      return (
        <img className="imagenCont" src={require("./images/icon.png")}></img>
      );
    }
  }
  function renderGente() {
    let list = [];
    gente.forEach((persona) => {
      list.push(
        <div className="intro intro-carousel">
          <div id="carousel" className="owl-carousel owl-theme">
            <div className="carousel-item-a intro-item bg-image" style={{}}>
              <h1 className="subtitulo">
                <span className="color-b">
                  {persona.SEGUNDO_APELLIDO
                    ? persona.NOMBRE +
                      " " +
                      persona.PRIMER_APELLIDO +
                      " " +
                      persona.SEGUNDO_APELLIDO
                    : persona.NOMBRE + " " + persona.PRIMER_APELLIDO}
                </span>
              </h1>
              <h1 className="fechas">
                <span className="color-b">{persona.CARGO}</span>
              </h1>
              <br></br>
              {renderImg(persona)}

              <section className="section-services" id="descripcion">
                <div></div>
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
              backgroundImage: `url(${intro})`,
              opacity: 1,
            }}
          ></div>
        </div>
      </div>
      {renderGente()}
    </div>
  );
};

export default Home;
