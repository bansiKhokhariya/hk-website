import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx'

const Home = lazy(() => import('./components/Home/Home.jsx'));

//  ******************* service section  *******************


// *************** website development import *************** //
const WebsiteDevelopment = lazy(() => import('./components/Services/WebsiteDevelopment/WebsiteDevelopment.jsx'))
//  ******** Mern ********
const Mern = lazy(() => import('./components/Services/WebsiteDevelopment/Mern/Mern.jsx'));
const MongoDb = lazy(() => import('./components/Services/WebsiteDevelopment/Mern/MongoDb/MongoDb.jsx'));
const ExpressJs = lazy(() => import('./components/Services/WebsiteDevelopment/Mern/ExpressJs/ExpressJs.jsx'));
const ReactJs = lazy(() => import('./components/Services/WebsiteDevelopment/Mern/ReactJs/ReactJs.jsx'));
const NodeJs = lazy(() => import('./components/Services/WebsiteDevelopment/Mern/NodeJs/NodeJs.jsx'));

//  ******** PHP ********
const Php = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/Php.jsx'));
const CodeIgniter = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/CodeIgniter/CodeIgniter.jsx'));
const CorePHP = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/CorePHP/CorePHP.jsx'));
const Laravel = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/Laravel/Laravel.jsx'));
const Shopify = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/Shopify/Shopify.jsx'));
const Wordpress = lazy(() => import('./components/Services/WebsiteDevelopment/PHP/Wordpress/Wordpress.jsx'));


// *************** Game development import *************** //

const GameDevelopment = lazy(() => import('./components/Services/GameDevelopment/GameDevelopment.jsx'))

const Unity2DGame = lazy(() => import('./components/Services/GameDevelopment/Unity2DGame/Unity2DGame.jsx'));
const Unity3DGame = lazy(() => import('./components/Services/GameDevelopment/Unity3DGame/Unity3DGame.jsx'));
const AndroidGame = lazy(() => import('./components/Services/GameDevelopment/AndroidGame/AndroidGame.jsx'));
const IOSGame = lazy(() => import('./components/Services/GameDevelopment/IOSGame/IOSGame.jsx'));
const HyperCasualGame = lazy(() => import('./components/Services/GameDevelopment/HyperCasualGame/HyperCasualGame.jsx'));
const ActionGame = lazy(() => import('./components/Services/GameDevelopment/ActionGame/ActionGame.jsx'));
const ShooterGame = lazy(() => import('./components/Services/GameDevelopment/ShooterGame/ShooterGame.jsx'));
const RPGGame = lazy(() => import('./components/Services/GameDevelopment/RPGGame/RPGGame.jsx'));
const RainyGame = lazy(() => import('./components/Services/GameDevelopment/RainyGame/RainyGame.jsx'));
const PuzzleGame = lazy(() => import('./components/Services/GameDevelopment/PuzzleGame/PuzzleGame.jsx'));
const SimulatorGame = lazy(() => import('./components/Services/GameDevelopment/SimulatorGame/SimulatorGame.jsx'));
const MultiPlayerGame = lazy(() => import('./components/Services/GameDevelopment/MultiPlayerGame/MultiPlayerGame.jsx'));



// *************** Mobile App Development import *************** //
const MobileAppDevelopment = lazy(() => import('./components/Services/MobileAppDevelopment/MobileAppDevelopment.jsx'));
const AndroidJAVAApplication = lazy(() => import('./components/Services/MobileAppDevelopment/AndroidJAVAApplication/AndroidJAVAApplication.jsx'));
const AndroidKotlinApplication = lazy(() => import('./components/Services/MobileAppDevelopment/AndroidKotlinApplication/AndroidKotlinApplication.jsx'));
const IoSwiftApplication = lazy(() => import('./components/Services/MobileAppDevelopment/IoSwiftApplication/IoSwiftApplication.jsx'));
const IosObjectiveApplication = lazy(() => import('./components/Services/MobileAppDevelopment/IosObjectiveApplication/IosObjectiveApplication.jsx'));
const ReactNativeApplication = lazy(() => import('./components/Services/MobileAppDevelopment/ReactNativeApplication/ReactNativeApplication.jsx'));
const FlutterApplication = lazy(() => import('./components/Services/MobileAppDevelopment/FlutterApplication/FlutterApplication.jsx'));


// *************** Designing import *************** //
const Designing = lazy(() => import('./components/Services/Designing/Designing.jsx'));
const WebDesignServices = lazy(() => import('./components/Services/Designing/WebDesignServices/WebDesignServices.jsx'));
const UiUxDesignServices = lazy(() => import('./components/Services/Designing/UiUxDesignServices/UiUxDesignServices.jsx'));

// solution import
const Support = lazy(() => import('./components/Solution/Support/Support.jsx'));
const CustomSolution = lazy(() => import('./components/Solution/CustomSolutions/CustomSolution.jsx'));
const TechnologyStack = lazy(() => import('./components/Solution/TechnologyStack/TechnologyStack.jsx'));
const UserCentricDesign = lazy(() => import('./components/Solution/UserCentricDesign/UserCentricDesign.jsx'));
const IntegrationServices = lazy(() => import('./components/Solution/IntegrationServices/IntegrationServices.jsx'));
const SecurityMeasures = lazy(() => import('./components/Solution/SecurityMeasures/SecurityMeasures.jsx'));
const QualityAssurance = lazy(() => import('./components/Solution/QualityAssurance/QualityAssurance.jsx'));

// *********** company import ****************

// about us 
const Story = lazy(() => import('./components/Company/AboutUs/Story/Story.jsx'));
const People = lazy(() => import('./components/Company/AboutUs/People/People.jsx'));
const Culture = lazy(() => import('./components/Company/AboutUs/Culture/Culture.jsx'));

// resources
const Blogs = lazy(() => import('./components/Company/Resources/Blogs/Blogs.jsx'));
const CaseStudies = lazy(() => import('./components/Company/Resources/CaseStudies/CaseStudies.jsx'));

// join us
const BecomePartner = lazy(() => import('./components/Company/JoinUs/BecomePartner/BecomePartner.jsx'));

//  *********** Portfolio import ****************
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio.jsx'));

//  *********** carrer import ****************
const InnovativeTeam = lazy(() => import('./components/Career/InnovativeTeam/InnovativeTeam.jsx'));
const CurrentOpenings = lazy(() => import('./components/Career/CurrentOpenings/CurrentOpenings.jsx'));
const Apply = lazy(() => import('./components/Career/Apply/Apply.jsx'));
const InternshipOpportunities = lazy(() => import('./components/Career/InternshipOpportunities/InternshipOpportunities.jsx'));
const Life = lazy(() => import('./components/Career/Life/Life.jsx'));
const BenefitsPerks = lazy(() => import('./components/Career/BenefitsPerks/BenefitsPerks.jsx'));
const DigitalInnovation = lazy(() => import('./components/Career/DigitalInnovation/DigitalInnovation.jsx'));

//  *********** Dedicated Resources import ****************
const DedicatedResources = lazy(() => import('./components/DedicatedResources/DedicatedResources.jsx'));

// *********** ClientTestimonials import ***********
const ClientTestimonials = lazy(() => import('./components/ClientTestimonials/ClientTestimonials.jsx'));

// *********** caseStudies import ***********
const WaterReminder = lazy(() => import('./components/Company/Resources/CaseStudies/WaterReminder/WaterReminder.jsx'));

// *********** Contact us ***********
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
          <Routes>

            {/************  Home Page  ************/}
            <Route path="/" element={<Home />}></Route>

            {/************  website development  ************/}
            <Route path="/services/websiteDevelopment" element={<WebsiteDevelopment />}></Route>

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
            <Route path="/services/gameDevelopment" element={<GameDevelopment />}></Route>
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
            <Route path="/services/designing" element={<Designing />}></Route>
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

            {/* WaterReminder */}
            <Route path="/company/resources/caseStudies/waterReminder" element={<WaterReminder />}></Route>


            {/* Contact us */}
            <Route path="/contact" element={<Contact />}></Route>

          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
