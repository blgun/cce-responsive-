import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

import Home from "./containers/Home";
import CivicEducation from "./containers/Programs/CivicEducation/CivicEducation";
import CivicParticipation from "./containers/Programs/CivicParticipation/civic_participation";
import BoardMembers from "./containers/About/BoardMember/BoardMembers";
import OurTeam from "./containers/About/OurTeam/OurTeam";
import YouthDevProject from "./containers/Programs/YouthDevProject/youth_dev_proj";
import EcologicalEducation from "./containers/Programs/EcologicalEducation/ecologi";
import News from "./containers/News/index";
import NewsDetail from "./containers/News/NewsDetail";
import CEPublication from "./containers/Publications/CEPublication/index";
import CP from "./containers/Publications/CivicParticipationPublication/publication";
import Youthdevelopmentpublication from "./containers/Publications/YouthDevelopmentPublications/youth";
import Ecologi from "./containers/Publications/EcologiPublication/index";
import ArchiveReport from "./containers/Archive/Report/index";
import ArchiveSuccesStories from "./containers/Archive/SuccesStories";
import ArchiveFeedbackBenef from "./containers/Archive/FeedbackBenef";
import ArchiveDonorEvolution from "./containers/Archive/DonorEvolution";
import Partners from "./containers/About/Partners/Partners";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/civic_participation"  component={CivicParticipation}/>
          <Route path="/about/board_members"  component={BoardMembers} />
          <Route path="/about/partners"  component={Partners} />
          <Route path="/about/our_team"  component={OurTeam} />
          <Route path="/programs/civic_education"  component={CivicEducation} />
          <Route path="/programs/youth_dev_proj"  component={YouthDevProject} />
          <Route path=" /programs/ecologeducation"  component={EcologicalEducation} />
          <Route path="/news"  component={News} />
          <Route path="/newsDetail"  component={NewsDetail} />
          <Route path="/publication/civic_education"  component={CEPublication} />
          <Route path="/publication/civic_publication"  component={CP} />
          <Route
            path="/publication/youth_development_publication"
            component={Youthdevelopmentpublication}
          />      /programs/ecologeducation
          <Route path="/programs/ecologeducation"  component={Ecologi} />
          <Route path="/archive/reports"  component={ArchiveReport} />
          <Route
            path="/archive/success_stories"
            component={ArchiveSuccesStories}
          />
          <Route
            path="/archive/feedback_from_beneficiares"
            component={ArchiveFeedbackBenef}
          />
          <Route
            path="/archive/donors_evolution"
            component={ArchiveDonorEvolution}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
