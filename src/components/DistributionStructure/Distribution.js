import React from "react";
import manufactureInfo from '../../images/others/more-for-less-animation.gif'

const Distribution = () => {
  return (
    <div className="mx-3">
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
              <h5 className = "card-title">Card title</h5>
              <p className = "card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className = "card-text">
                <small className = "text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
