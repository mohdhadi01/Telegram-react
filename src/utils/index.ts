import { MODE } from "../store/mode";

export function getTheme(): MODE {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      return MODE.DARK;
    } else {
      return MODE.LIGHT;
    }
  }