import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProgressBar } from "react-bootstrap";

class TabsTwo extends Component {
  render() {
    let tab1 = "Skills",
      tab2 = "Certificates",
      tab3 = "Experience",
      tab4 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div
                        className={`rn-progress-bar progress-bar--1 mt_dec--10`}
                      >
                        <div className="single-progress">
                          <h6 className="title">React Native/Android Apps</h6>
                          <ProgressBar now={100} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">
                            Frontend Development (React, Vue, Tailwind, CSS, Bootstrap, HTML)
                          </h6>
                          <ProgressBar now={100} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">Backend Development (Node, REST API, MongoDB, MySQL, GraphQL)</h6>
                          <ProgressBar now={100} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">PHP/Laravel</h6>
                          <ProgressBar now={85} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">WordPress, Shopify</h6>
                          <ProgressBar now={85} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">Swift</h6>
                          <ProgressBar now={85} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">
                            Source Versioning Control System
                          </h6>
                          <ProgressBar now={100} />
                        </div>

                        <div className="single-progress">
                          <h6 className="title">
                            Task Management (Trello/Jira/Asana)
                          </h6>
                          <ProgressBar now={100} />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                          · Project Management Professional <span></span>
                          </a>{" "}
                          
                        </li>
                        <li>
                          <a href="/service">
                          · Cisco Certified Network Associate <span></span>
                          </a>{" "}
                          
                        </li>
                        <li>
                          <a href="/service">
                          · Agile and Scrum <span></span>
                          </a>{" "}
                          
                        </li>
                        <li>
                          <a href="/service">
                          · AWS Certified Solutions Architect <span></span>
                          </a>{" "}
                          
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Technology Training Teacher at Technology Training
                            Centre, CA
                            <span></span>
                          </a>{" "}
                          May 2014 - Oct 2016
                          {/* It’s Computer training school in Edmonton, Alberta (It
                          includes online class as well). Node.JS/Angular.JS
                          PHP/Laravel WordPress Swift Android Rest API
                          MongoDB/MySQL/GraphQL Shopify Source
                          Versioning/Controlling (Github, Bitbucket, Gitlab) I
                          helped students access career resources and
                          experiential learning critical to their success. I
                          helped students to learn how to do the software
                          engineering & project management principles/practices. */}
                        </li>
                        <li>
                          <a href="/service">
                            Senior Web Front-end & Back-end developer at Synex
                            Medical, CA
                            <span></span>
                          </a>{" "}
                          Jan 2017 - March 2018
                          {/* Synex Medical sells a wearable device that tells users
                          how their body is performing by measuring metabolites
                          that affect everything from weight gain to athletic
                          performance, to the likelihood of developing diabetes
                          in real-time. I have worked as a startup developer of
                          this company. -Developed responsive website based on
                          the Adobe XD design file & detailed requirements for
                          this company (By using React.JS/Node.JS/MongoDB) with
                          another 7 start-up staffs. -Amazon web service
                          management & database configuration It has grown up
                          well and been Expanded to US with Boston office. */}
                        </li>
                        <li>
                          <a href="/service">
                            Senior Software Engineer at Full-Time (individual)
                            Freelancer, CA<span></span>
                          </a>{" "}
                          Mar 2021 - Present
                          {/* I have started my new career as an
                          independent/individual freelancer Coz my previous
                          company owner has been moved to the United States. I
                          wanted to go my own way with my grown-up skills in
                          order to achieve my dreams. So that I have been
                          working as a full-time independent freelancer with my
                          great customers. Here are my sample websites that I
                          have developed since I started my own way. */}
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Bachelor of Engineering in Computer Science
                            <span> · Apr 2011 - Apr 2014</span>
                          </a>{" "}
                          University of Ontario Institute of Technology, CA
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
