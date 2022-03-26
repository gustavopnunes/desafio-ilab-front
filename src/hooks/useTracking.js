import { useContext, useState } from "react";
import { TrackingContext } from "../contexts/TrackingContext";

function useTracking() {

  let watchID = "";
  let trackingID = "";
  const [permission, setPermission] = useState(false);
  
  return {
    watchID,
    trackingID,
    permission,
    setPermission,
  };
}

export default useTracking;