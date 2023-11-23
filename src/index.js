import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MenuAddiction from './routes/MenuAddiction'
// import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'



import Jobs from './routes/JOBS';

import ResidentialProgramPage from './routes/ResidentialProgramPage';
import DetoxPHP from './routes/Detox-PHP';

import COCAINE from './routes/COCAINE';
import ALCOHOL from './routes/ALCOHOL';
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';
import MDMA from './routes/MDMA';
import METH from './routes/METH';
import OPIATE from './routes/OPIATE';
import OPIOID from './routes/OPIOID';
import OXYCODONE from './routes/OXYCODONE';
import PRESCRIPTIONS from './routes/PRESCRIPTIONS';
import XANAX from './routes/XANAX';

import SA from './routes/SA';
import Php from './routes/Programs-PHP';
import Iop from './routes/Programs-IOP';
import Op from './routes/Programs-OP';


import DetoxProgramPage from './routes/DetoxProgramPage';

import SoberLivingPage from './routes/SoberLivingPage';
import CitrusPage from './routes/CitrusPage';
import DetroitPage from './routes/DetroitPage';
import HuntingtonPage from './routes/HuntingtonPage';
import HollywoodPage from './routes/HollywoodPage';
import VenicePage from './routes/VenicePage';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />



      <Route exact path='/detox-programs' element={<DetoxProgramPage />} />
      <Route exact path='/residential-programs' element={<ResidentialProgramPage />} />
      <Route exact path='/detox-partial-hospitalization-program' element={<DetoxPHP />} />


      <Route exact path='/substance-abuse' element={<SA />} />
      <Route exact path='/partial-hospitalization-program' element={<Php />} />
      <Route exact path='/intensive-outpatient-program' element={<Iop />} />
      <Route exact path='/outpatient-program' element={<Op />} />

      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/oxycodone' element={<OXYCODONE />} />
      <Route exact path='/prescriptions' element={<PRESCRIPTIONS />} />
      <Route exact path='/xanax' element={<XANAX />} />

      <Route exact path='/jobs' element={<Jobs />} />=

      <Route exact path='/sober-living' element={<SoberLivingPage />} />
      <Route exact path='/north-citrus-los-angeles' element={<CitrusPage />} />
      <Route exact path='/north-detroit-los-angeles' element={<DetroitPage />} />
      <Route exact path='/huntington-beach' element={<HuntingtonPage />} />
      <Route exact path='/west-hollywood' element={<HollywoodPage />} />
      <Route exact path='/venice-california' element={<VenicePage />} />

      <Route exact path='/contact' element={<ContactPage />} />

      <Route exact path='/substance-abuse-treatment' element={<MenuAddiction />} />
      {/* <Route exact path='/insurance' element={<InsurancePage />} /> */}
    </Routes>
  </BrowserRouter>,
);

