import { useState } from "react";

function useTrackingProvider() {
  const [watchID, setWatchID] = useState(null);
  const [trackingID, setTrackingID] = useState();
  const [permission, setPermission] = useState(false);
  const [orderID, setOrderID] = useState();

  return {
    watchID,
    setWatchID,
    trackingID,
    setTrackingID,
    permission,
    setPermission,
    orderID,
    setOrderID,
  };
}

export default useTrackingProvider;
