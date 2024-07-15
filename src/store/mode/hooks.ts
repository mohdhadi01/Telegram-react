import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "..";

import { useCallback, useEffect } from "react";
import { MODE, setMode } from ".";
import { getTheme } from "../../utils";

export const useSystempreferenceMode = () => {
  const dispatch = useDispatch<AppDispatch>();
  const existingMode = useMode();

  useEffect(() => { 
    const mode = getTheme();
    if (existingMode === null) {
      dispatch(setMode({ mode }));
    }
  }, [dispatch, existingMode]);
};

export const useSetMode = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (mode: MODE) => {
      dispatch(setMode({ mode }));
    },
    [dispatch],
  );
};

export const useMode = () => {
  return useSelector((state: AppState) => state?.mode?.mode);
};
