import { useCallback, useEffect } from "react";

const useDebounce = (fn, deps, delay) => {
  const callback = useCallback(fn, [...deps]);

  useEffect(() => {
    const handler = setTimeout(callback, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

export default useDebounce;
