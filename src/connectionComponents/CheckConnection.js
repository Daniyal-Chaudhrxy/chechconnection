import React from "react";
import { Detector } from "react-detect-offline";

const CheckConnection = ({ content }) => {
  return (
    <>
      <Detector
        render={({ online }) => (
          <div className="">
            {online ? (
              content
            ) : (
              <div>
                <h1>
                  No Connection Found.. Please Check You Internet Connection
                </h1>
              </div>
            )}
          </div>
        )}
      />
    </>
  );
};

export default CheckConnection;
