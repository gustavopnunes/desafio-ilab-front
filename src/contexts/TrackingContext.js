import { createContext } from 'react';
import useTrackingProvider from "../hooks/useTrackingProvider";

export const TrackingContext = createContext({});

export const TrackingProvider = ({ children }) => {
    const trackingProvider = useTrackingProvider();

    return (
    <TrackingContext.Provider value={trackingProvider}>{children}</TrackingContext.Provider>
  );
}