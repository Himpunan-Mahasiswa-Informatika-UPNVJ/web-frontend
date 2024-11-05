import { useState, useEffect } from "react";

function usePageLoaded() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      // Add the load event listener if the page is not yet fully loaded
      window.addEventListener("load", handleLoad);
    }

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isPageLoaded;
}

export default usePageLoaded;
