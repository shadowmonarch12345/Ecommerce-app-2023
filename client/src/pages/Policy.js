import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
           
           
            <p><h1>We assure you that all your personal data that u share with us is completely Secured.</h1></p>
           
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Policy;