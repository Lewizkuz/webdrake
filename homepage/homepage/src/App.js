import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Content from './Components/Content.js';

export default function App() {
    return (
      <Router >
        <div className="app">
          <Header viewpath={window.location.pathname.split('/')[1].toUpperCase()}/>
          <Switch>
            <Route path='/portfolio'>
              <Content headtext='Dude'>asdasdasd</Content>
            </Route>
            <Route path='/'>
              <Content headtext='Perustietoja:'>
                  Olen 22-vuotias tietotekniikan opiskelija, joka valmistuu insinööriksi vuonna 2021.

                  Paneudun antaumuksella työhöni, keskityn saadakseni jokaisen työvaiheen kunnolla alusta loppuun ja suuri iloni on nähdä asioiden loksahtavan paikoilleen.

                  Linkkejä painamalla voitte liikkua eri osioihin kiinnostustenne mukaan.
              </Content>
              <Content headtext='Yhteystiedot:'>
               asd,asd,asds,sdssaa
              </Content>
              <Content headtext='Harrastukset'>
                Kuvataiteen tutkintosarjakuva Theseus(2016) on pisin nykyinen kuvataiteen saavutukseni.
                Thesus on 30-sivuinen mustavalkoinen sarjakuva, joka on tehty alusta loppuun itse. Piirrustusaikaa annettiin koko vuoden ajaksi.
                Opiskelin Jyväskylän kuvataidekoulussa kerran viikossa toimivassa ryhmässä vuosina 2010 - 2016 ja toimin siellä yhteensä kuusi vuotta. Opiskelujen aikana kerrytin kokemustani kuvataiteen, animaation, muotoilun ja kuvankäsittelyn saralla. Sain käytetystä ajastani osallistumistodistuksen, koska päättötodistuksen saamisesta uupui yhden vuoden verran.
                Muuten piirrustustaide ja maalaaminen on yksi intohimoistani vapaa-ajalla ja olen paraaikaa kirjoittamassa kokonaista omaa sarjakuvaprojektiani. Kuulun myos Keski-suomen sarjakuvaseura KESSiin ja anime- ja mangaseura Tsukiaihin. Kumpikin kokoontuu säännöllisesti kerran viikossa.
                Tämä julkaisu myydään Tampereen sarjakuvafestareilla.
             </Content>
              <Content headtext= 'Koulutus'>
                  Olen opiskelllut ylioppilaaksi vuonna 2016 Schildtin lukiosta. Pääaineet olivat matematiikka ja fysiikka, joista arvosanat E ja M. Opiskelen nykyisin Jyväskylän ammattikorkeakoulussa Tietotekniikan insinooritutkintoa.
                  Käynyt varusmiespalveluksen hyväksytysti Kainuun Prikaatissa Kranaatinheitinkomppaniassa. Reservisotilasarvo korpraali
                  Suoritettuna ovat myos Hygienia- ja Anniskelupassi., sekä kuvataiteen peruskoulutus.
              </Content>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }