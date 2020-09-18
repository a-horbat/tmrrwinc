import React from "react";
import "../../css/components/two-text-info.css";

const TwoTextInfo = ({ text1, text2, paddingBottom }) => {
  return (
    <section className="twotext-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 text-block">
            {text1.map((textItem, i) => (
              <p style={{ paddingBottom }} key={i}>
                {textItem}
              </p>
            ))}
          </div>
          <div className="col-lg-6 col-md-6 text-block">
            {text2.map((textItem, i) => (
              <p style={{ paddingBottom }} key={i}>
                {textItem}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoTextInfo;
