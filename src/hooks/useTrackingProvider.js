import { useState } from "react";

function useTrackingProvider() {
  const [watchID, setWatchID] = useState(null);
  const [trackingID, setTrackingID] = useState();
  const [permission, setPermission] = useState(false);
  // let watchID = "x";
  // let trackingID = "y";
 
  
  return {
    watchID,
    setWatchID,
    trackingID,
    setTrackingID,
    permission,
    setPermission,
  };
};

export default useTrackingProvider;
