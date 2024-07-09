import { useEffect, useCallback, useRef } from 'react';

const useInactivityTimeout = (callback, timeout = 15 * 60 * 1000) => {
  const timeoutIdRef = useRef(null);

  const handleActivity = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      callback();
    }, timeout);
  }, [callback, timeout]);

  useEffect(() => {
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('click', handleActivity);
    // window.addEventListener('beforeunload', callback); // Add this line

    handleActivity(); // Set the timeout initially

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      // window.removeEventListener('beforeunload', callback); // Add this line
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [handleActivity, callback]);

  return;
};

export default useInactivityTimeout;