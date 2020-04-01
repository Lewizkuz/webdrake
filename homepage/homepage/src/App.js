import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Footer from './Components/Footer';

export default function App() {
    return (
      <Router >
        <div className="app">
          <Header viewpath={window.location.pathname.split('/')[1].toUpperCase()}/>
          <Switch>
            <Route path='/portfolio'>
              <PortfolioPage/>
            </Route>
            <Route path='/about'>
              <AboutPage/>
            </Route>
            <Route path='/stuff'>
              <OtherPage/>
            </Route>
            <Route path='/art'>
              <ArtPage/>
            </Route>
            <Route path='/'>
              <HomePage/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
function HomePage() {
  return(
    <>
    <SVG/>
      <Content headtext='Perustietoja:'>
          22-vuotias tietotekniikan opiskelija, joka valmistuu Tieto- ja Viestintätekniikan insinööriksi keväällä vuonna 2021. Erikoistunut Front-End-ohjelmistoon.
          
      </Content>
      <Content headtext= 'Tekniikat'>
        
      </Content>
      <Content headtext= 'Koulutus'>
        Olen opiskelllut ylioppilaaksi vuonna 2016 Schildtin lukiosta. Pääaineet olivat matematiikka ja fysiikka, joista arvosanat E ja M. Opiskelen nykyisin Jyväskylän ammattikorkeakoulussa Tietotekniikan insinooritutkintoa.
        Käynyt varusmiespalveluksen hyväksytysti Kainuun Prikaatissa Kranaatinheitinkomppaniassa. Reservisotilasarvo korpraali
        Suoritettuna ovat myos Hygienia- ja Anniskelupassi., sekä kuvataiteen peruskoulutus.
      </Content>
      <Content headtext='Harrastukset'>
        Kuvataiteen tutkintosarjakuva Theseus(2016) on pisin nykyinen kuvataiteen saavutukseni.
        Thesus on 30-sivuinen mustavalkoinen sarjakuva, joka on tehty alusta loppuun itse. Piirrustusaikaa annettiin koko vuoden ajaksi.
        Opiskelin Jyväskylän kuvataidekoulussa kerran viikossa toimivassa ryhmässä vuosina 2010 - 2016 ja toimin siellä yhteensä kuusi vuotta. Opiskelujen aikana kerrytin kokemustani kuvataiteen, animaation, muotoilun ja kuvankäsittelyn saralla. Sain käytetystä ajastani osallistumistodistuksen, koska päättötodistuksen saamisesta uupui yhden vuoden verran.
        Muuten piirrustustaide ja maalaaminen on yksi intohimoistani vapaa-ajalla ja olen paraaikaa kirjoittamassa kokonaista omaa sarjakuvaprojektiani. Kuulun myos Keski-suomen sarjakuvaseura KESSiin ja anime- ja mangaseura Tsukiaihin. Kumpikin kokoontuu säännöllisesti kerran viikossa.
        Tämä julkaisu myydään Tampereen sarjakuvafestareilla.
      </Content>
      <Content headtext='Yhteystiedot:'>
        asd,asd,asds,sdssaa
      </Content>
    </>
    );
  }
function AboutPage() {
  return(
    <>
      <Content headtext="Hi, I'm Leevi">A good boy</Content>
      <Content headtext='Lorem'>Ipsum</Content>
    </>
  );
}
function PortfolioPage() {
  return(
    <>
      <Content headtext='Kouluprojektit'>Niin hyvää contenttia</Content>
      <Content headtext='Muut rojektit'>Kovvaa hommaa</Content>
    </>
  );
}
function OtherPage() {
  return(
    <>
      <Content headtext='Other stuff'>When there is some to tell</Content>
      <Content headtext='Lorem'>Ipsum</Content>
    </>
  );
}
function ArtPage() {
  return(
    <>
      <Content headtext='Theseus'>old stuff</Content>
      <Content headtext='KESS'>New stuff</Content>
    </>
  );
}
function SVG()  {
  return(
    <article>
    <svg height= "90px" width="100px">
      <g
         id="layer1"
         transform="translate(-4.2256147,-3.7627544)">
        <g
           id="g4543"
           transform="translate(7.0826423,-134.43657)">
          <path
             id="backhair"
             d="m 82.676444,177.62488 c -2.265572,29.48256 -9.969922,42.54266 -9.969922,42.54266 l -2.32889,-11.23065 c 0.953907,8.31823 -11.528406,14.19897 -11.227407,15.12338 0,0 3.28301,-13.45451 -13.57156,-14.24634 -2.234933,4.67977 -7.014605,7.77301 -15.911541,9.59633 3.382284,-10.10279 1.149089,-5.15455 1.149089,-5.15455 -1.590256,2.23616 -5.810149,3.01549 -9.648708,2.46319 3.191434,-2.88074 6.2634,-6.75532 3.671558,-12.75265 -3.663859,1.3054 -6.502951,1.54576 -11.64215,-1.84203 3.473435,0.18637 4.268064,-10.29267 3.777953,-24.49934 -0.309067,-8.95882 0.66983,-20.61457 5.569032,-26.93643 6.025362,-7.77504 17.275125,-9.2574 27.281756,-9.2574 9.677571,0 21.646491,3.0437 27.6585,10.37987 5.258982,6.41731 5.907016,16.51299 5.192288,25.81396 z"
             />
          <path
            id="face"
             d="m 78.241071,180.39434 c 0,18.26567 -11.303687,33.9805 -27.78125,33.82887 -19.15237,-0.17624 -28.15923,-14.80725 -28.15923,-33.07292 0,-18.26566 11.14607,-33.07291 28.15923,-33.07291 17.01317,0 27.78125,14.05129 27.78125,32.31696 z"
              />
          <ellipse
             cx="60.135647"
             cy="186.14995"
             rx="3.8754082"
             ry="7.0158248"
             id="eyeright"
              />
          <ellipse
             cx="37.2841"
             cy="185.5486"
             rx="3.8754082"
             ry="7.0158253"
             id="eyeleft"
              />
          <path
             id="mouth"
             d="m 41.836623,204.43635 c 0,0 5.043866,2.79431 15.387984,-0.1014 1.452185,-2.48831 -0.203973,-4.96396 -0.717906,-6.18888 0.717906,6.18888 -7.675486,6.54856 -14.670078,6.29028 z"
             />
          <path
             id="leftbothair"
             d="m 80.180859,163.6325 c 0.07065,12.20966 -2.922338,23.90872 -13.497113,34.34414 2.588457,-11.51619 -1.921424,-29.24342 -4.677217,-45.43583 9.250346,-4.40147 13.931602,2.78884 18.17433,11.09169 z"
             />
          <path
             id="middlebothair"
             d="m 65.748302,161.62798 c -5.543374,22.70386 -25.238248,28.79038 -29.80055,30.06782 9.439686,-12.65134 9.045456,-29.04217 12.428033,-38.48681 z"
             />
          <path
             id="middlelefthair"
             d="m 52.343115,161.60856 c -15.992767,22.04061 -37.299838,22.71329 -40.247799,22.81559 9.051827,-10.6407 18.533107,-21.04879 20.756417,-35.38801 z"
             />
          <path
             id="middlehair"
             d="M 69.098916,156.34514 C 60.956261,172.89923 23.990298,188.23642 3.4958753,173.12227 31.672837,165.14441 30.153715,145.51739 61.74789,147.90806 Z"
              />
          <path
             id="tophair"
             d="M 58.115393,142.0839 C 38.883566,129.05192 32.644971,152.78058 -2.8570276,155.26659 7.4700148,170.11542 11.146958,172.49846 29.213445,167.21117 45.195601,163.37712 56.541911,164.7009 58.115393,142.0839 Z"
             />
        </g>
      </g>
    </svg>
    </article>);
}