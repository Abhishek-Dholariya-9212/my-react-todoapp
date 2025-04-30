import { useState, useCallback } from 'react';

const useToggle = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  return [isVisible, toggle];
};

export default useToggle;
