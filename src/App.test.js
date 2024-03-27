import React from 'react'
import { Home } from './components/index'
import ScrollToTop from './ScrollToTop';

// *************** Website development import *************** //
// mern section
import Mern from './components/Services/WebsiteDevelopment/Mern/Mern.jsx'
import MongoDb from './components/Services/WebsiteDevelopment/Mern/MongoDb/MongoDb.jsx'
import ExpressJs from './components/Services/WebsiteDevelopment/Mern/ExpressJs/ExpressJs.jsx'
import ReactJs from './components/Services/WebsiteDevelopment/Mern/ReactJs/ReactJs.jsx'
import NodeJs from './components/Services/WebsiteDevelopment/Mern/NodeJs/NodeJs.jsx'
// php 
import Php from './components/Services/WebsiteDevelopment/PHP/Php.jsx'
import CodeIgniter from './components/Services/WebsiteDevelopment/PHP/CodeIgniter/CodeIgniter.jsx'
import CorePHP from './components/Services/WebsiteDevelopment/PHP/CorePHP/CorePHP.jsx'
import Laravel from './components/Services/WebsiteDevelopment/PHP/Laravel/Laravel.jsx'
import Shopify from './components/Services/WebsiteDevelopment/PHP/Shopify/Shopify.jsx'
import Wordpress from './components/Services/WebsiteDevelopment/PHP/Wordpress/Wordpress.jsx'

// *************** Game development import *************** //
import Unity2DGame from './components/Services/GameDevelopment/Unity2DGame/Unity2DGame.jsx'
import Unity3DGame from './components/Services/GameDevelopment/Unity3DGame/Unity3DGame.jsx'
import AndroidGame from './components/Services/GameDevelopment/AndroidGame/AndroidGame.jsx'
import IOSGame from './components/Services/GameDevelopment/IOSGame/IOSGame.jsx'
import HyperCasualGame from './components/Services/GameDevelopment/HyperCasualGame/HyperCasualGame.jsx'
import ActionGame from './components/Services/GameDevelopment/ActionGame/ActionGame.jsx'
import ShooterGame from './components/Services/GameDevelopment/ShooterGame/ShooterGame.jsx'
import RPGGame from './components/Services/GameDevelopment/RPGGame/RPGGame.jsx'
import RainyGame from './components/Services/GameDevelopment/RainyGame/RainyGame.jsx'
import PuzzleGame from './components/Services/GameDevelopment/PuzzleGame/PuzzleGame.jsx'
import SimulatorGame from './components/Services/GameDevelopment/SimulatorGame/SimulatorGame.jsx'
import MultiPlayerGame from './components/Services/GameDevelopment/MultiPlayerGame/MultiPlayerGame.jsx'

// *************** Mobile App Development import *************** //
import MobileAppDevelopment from './components/Services/MobileAppDevelopment/MobileAppDevelopment.jsx'
import AndroidJAVAApplication from './components/Services/MobileAppDevelopment/AndroidJAVAApplication/AndroidJAVAApplication.jsx'
import AndroidKotlinApplication from './components/Services/MobileAppDevelopment/AndroidKotlinApplication/AndroidKotlinApplication.jsx'
import IoSwiftApplication from './components/Services/MobileAppDevelopment/IoSwiftApplication/IoSwiftApplication.jsx'
import IosObjectiveApplication from './components/Services/MobileAppDevelopment/IosObjectiveApplication/IosObjectiveApplication.jsx'
import ReactNativeApplication from './components/Services/MobileAppDevelopment/ReactNativeApplication/ReactNativeApplication.jsx'
import FlutterApplication from './components/Services/MobileAppDevelopment/FlutterApplication/FlutterApplication.jsx'

// *************** Designing import *************** //
import WebDesignServices from './components/Services/Designing/WebDesignServices/WebDesignServices.jsx'
import UiUxDesignServices from './components/Services/Designing/UiUxDesignServices/UiUxDesignServices.jsx'

// solution import
import Support from './components/Solution/Support/Support.jsx'
import CustomSolution from './components/Solution/CustomSolutions/CustomSolution.jsx'
import TechnologyStack from './components/Solution/TechnologyStack/TechnologyStack.jsx'
import UserCentricDesign from './components/Solution/UserCentricDesign/UserCentricDesign.jsx'
import IntegrationServices from './components/Solution/IntegrationServices/IntegrationServices.jsx'
import SecurityMeasures from './components/Solution/SecurityMeasures/SecurityMeasures.jsx'
import QualityAssurance from './components/Solution/QualityAssurance/QualityAssurance.jsx'


// *********** company import ****************

// about us 
import Story from './components/Company/AboutUs/Story/Story.jsx'
import People from './components/Company/AboutUs/People/People.jsx'
import Culture from './components/Company/AboutUs/Culture/Culture.jsx'

// resources
import Blogs from './components/Company/Resources/Blogs/Blogs.jsx'
import CaseStudies from './components/Company/Resources/CaseStudies/CaseStudies.jsx'

// join us
import BecomePartner from './components/Company/JoinUs/BecomePartner/BecomePartner.jsx'

//  *********** Portfolio import ****************
import Portfolio from './components/Portfolio/Portfolio.jsx'

//  *********** carrer import ****************
import InnovativeTeam from './components/Career/InnovativeTeam/InnovativeTeam.jsx'
import CurrentOpenings from './components/Career/CurrentOpenings/CurrentOpenings.jsx'
import Apply from './components/Career/Apply/Apply.jsx'
import InternshipOpportunities from './components/Career/InternshipOpportunities/InternshipOpportunities.jsx'
import Life from './components/Career/Life/Life.jsx'
import BenefitsPerks from './components/Career/BenefitsPerks/BenefitsPerks.jsx'
import DigitalInnovation from './components/Career/DigitalInnovation/DigitalInnovation.jsx'


//  *********** Dedicated Resources import ****************
import DedicatedResources from './components/DedicatedResources/DedicatedResources.jsx'

// *********** ClientTestimonials import ***********
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials.jsx'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* service section */}

          {/************  website development  ************/}
          {/* mern route */}
          <Route path="/services/mern" element={<Mern />}></Route>
          <Route path="/services/mern/mongoDb" element={<MongoDb />}></Route>
          <Route path="/services/mern/expressJs" element={<ExpressJs />}></Route>
          <Route path="/services/mern/reactJs" element={<ReactJs />}></Route>
          <Route path="/services/mern/nodeJs" element={<NodeJs />}></Route>

          {/* php route */}
          <Route path="/services/php" element={<Php />}></Route>
          <Route path="/services/php/codeIgniter" element={<CodeIgniter />}></Route>
          <Route path="/services/php/corePHP" element={<CorePHP />}></Route>
          <Route path="/services/php/laravel" element={<Laravel />}></Route>
          <Route path="/services/php/shopify" element={<Shopify />}></Route>
          <Route path="/services/php/wordpress" element={<Wordpress />}></Route>

          {/************  Game development  ************/}
          <Route path="/services/gameDevelopment/unity2DGame" element={<Unity2DGame />}></Route>
          <Route path="/services/gameDevelopment/unity3DGame" element={<Unity3DGame />}></Route>
          <Route path="/services/gameDevelopment/androidGame" element={<AndroidGame />}></Route>
          <Route path="/services/gameDevelopment/iOSGame" element={<IOSGame />}></Route>
          <Route path="/services/gameDevelopment/hyperCasualGame" element={<HyperCasualGame />}></Route>
          <Route path="/services/gameDevelopment/actionGame" element={<ActionGame />}></Route>
          <Route path="/services/gameDevelopment/shooterGame" element={<ShooterGame />}></Route>
          <Route path="/services/gameDevelopment/RPGGame" element={<RPGGame />}></Route>
          <Route path="/services/gameDevelopment/RainyGame" element={<RainyGame />}></Route>
          <Route path="/services/gameDevelopment/puzzleGame" element={<PuzzleGame />}></Route>
          <Route path="/services/gameDevelopment/simulatorGame" element={<SimulatorGame />}></Route>
          <Route path="/services/gameDevelopment/multiPlayerGame" element={<MultiPlayerGame />}></Route>

          {/**************** Mobile App Development  ****************/}
          <Route path="/services/mobileAppDevelopment" element={<MobileAppDevelopment />}></Route>
          <Route path="/services/mobileAppDevelopment/androidJavaApplication" element={<AndroidJAVAApplication />}></Route>
          <Route path="/services/mobileAppDevelopment/androidKotlinApplication" element={<AndroidKotlinApplication />}></Route>
          <Route path="/services/mobileAppDevelopment/ioSwiftApplication" element={<IoSwiftApplication />}></Route>
          <Route path="/services/mobileAppDevelopment/iosObjectiveApplication" element={<IosObjectiveApplication />}></Route>
          <Route path="/services/mobileAppDevelopment/reactNativeApplication" element={<ReactNativeApplication />}></Route>
          <Route path="/services/mobileAppDevelopment/flutterApplication" element={<FlutterApplication />}></Route>

          {/**************** Designing  ****************/}
          <Route path="/services/designing/uiUxDesignServices" element={<UiUxDesignServices />}></Route>
          <Route path="/services/designing/webDesignServices" element={<WebDesignServices />}></Route>


          {/* solution section */}
          <Route path="/solution/support" element={<Support />}></Route>
          <Route path="/solution/customSolution" element={<CustomSolution />}></Route>
          <Route path="/solution/technologyStack" element={<TechnologyStack />}></Route>
          <Route path="/solution/userCentricDesign" element={<UserCentricDesign />}></Route>
          <Route path="/solution/integrationServices" element={<IntegrationServices />}></Route>
          <Route path="/solution/securityMeasures" element={<SecurityMeasures />}></Route>
          <Route path="/solution/qualityAssurance" element={<QualityAssurance />}></Route>

          {/* company section */}
          <Route path="/company/about/story" element={<Story />}></Route>
          <Route path="/company/about/people" element={<People />}></Route>
          <Route path="/company/about/culture" element={<Culture />}></Route>
          <Route path="/company/resources/blogs" element={<Blogs />}></Route>
          <Route path="/company/resources/caseStudies" element={<CaseStudies />}></Route>
          <Route path="/company/joinus" element={<BecomePartner />}></Route>

          {/* Portfolio section */}
          <Route path="/portfolio" element={<Portfolio />}></Route>

          {/* carrer section */}
          <Route path="/carrer/innovativeTeam" element={<InnovativeTeam />}></Route>
          <Route path="/carrer/currentOpenings" element={<CurrentOpenings />}></Route>
          <Route path="/carrer/apply" element={<Apply />}></Route>
          <Route path="/carrer/internshipOpportunities" element={<InternshipOpportunities />}></Route>
          <Route path="/carrer/life" element={<Life />}></Route>
          <Route path="/carrer/benefitsPerks" element={<BenefitsPerks />}></Route>
          <Route path="/carrer/digitalInnovation" element={<DigitalInnovation />}></Route>


          {/* DedicatedResources section */}
          <Route path="/dedicatedResources" element={<DedicatedResources />}></Route>

          {/* Client Testimonials */}
          <Route path="/clientTestimonials" element={<ClientTestimonials />}></Route>


        </Routes>
      </Router>
    </>
  )
}

export default App