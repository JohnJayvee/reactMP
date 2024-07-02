import { useEffect, useCallback, useRef } from 'react';

const useInactivityTimeout = (callback, timeout = 2 * 60 * 1000) => {
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

    handleActivity(); // Set the timeout initially

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('click', handleActivity);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [handleActivity]);

  return;
};

export default useInactivityTimeout;
