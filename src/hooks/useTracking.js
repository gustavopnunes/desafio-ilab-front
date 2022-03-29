import { useContext } from "react";
import { TrackingContext } from "../contexts/TrackingContext";

function useTracking() {
  return useContext(TrackingContext);
}

export default useTracking;
