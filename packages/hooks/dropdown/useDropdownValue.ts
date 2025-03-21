import { useState, useLayoutEffect, useCallback } from "react";

import type { DropdownOptionType, Languages } from "@repo/types";

const useDropdownValue = (
  options: readonly DropdownOptionType<Languages>[],
  initKey?: string,
) => {
  const [selectedOption, setSelectedOption] = useState<
    DropdownOptionType<Languages>
  >({
    key: "",
    label: "" as Languages,
  }); // NOTE: ""은 string이라 부득이하게 as Languages 단언

  const handleSelect = useCallback(
    (key: string) => {
      const selectIndex = options.findIndex((item) => item.key === key);

      setSelectedOption(options[selectIndex]);
    },
    [selectedOption],
  );

  useLayoutEffect(() => {
    initKey && handleSelect(initKey);
  }, []);

  return { selectedOption, handleSelect };
};

export default useDropdownValue;
