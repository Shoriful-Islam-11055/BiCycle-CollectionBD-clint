import React from "react";
import manufactureInfo from '../../images/others/more-for-less-animation.gif'

const Distribution = () => {
  return (
    <div className="mx-3 vh-100">
      <p className="section-title text-center py-3 mt-3 fs-2">
        Our Manufacture and Distribution Structure
      </p>
      <div className = "card mb-3 border-0">
        <div className = "row g-0">
          <div className = "col-md-6">
            <img src={manufactureInfo} className = "img-fluid rounded-start" alt="..." />
          </div>
          <div className = "col-md-6">
            <div className = "card-body">
              <h2 className = "card-title">Short description about us</h2>
              <p className = "card-text fs-4">
              Our organization was started in 1991 Since then, the company has continued to work with a reputation. We do not have our own retailer showroom. We only import from different countries and manufacture ourselves in our own factory. Through various agents, we export our products outside the country and distribute them to any showroom or various bicycle companies inside the country. Looking at the picture on the left side, we are fully shown how we distribute our products starting from our organization manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
