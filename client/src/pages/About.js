import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
            <h1>E-commerce Website</h1>
Aug 11, 2023
A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a 
brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default About;