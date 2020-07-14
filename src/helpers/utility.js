import { useEffect, useRef } from "react";

export const isEmpty = (obj) => Object.keys(obj).length === 0;

export const useIsMountedRef = () => {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  });
  return isMountedRef;
};
