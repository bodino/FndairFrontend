import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category) => {
  const eventTracker = (action, label) => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;