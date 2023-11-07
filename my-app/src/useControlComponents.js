import { useState } from "react";

// Custom hook useControlComponents
export function useControlComponents(initialActiveIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const setActive = (index) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    setActive,
  };
}
