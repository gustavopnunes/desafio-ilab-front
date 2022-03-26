import { createContext } from "react";
import useTrackingProvider from "../hooks/useTrackingProvider";

export const TrackingContext = createContext({});

function TrackingProvider({children}) {
    const trackingProvider = useTrackingProvider;

    return(
        <TrackingContext.Provider value={trackingProvider}>{children}</TrackingContext.Provider>
    )
}
export default TrackingProvider;