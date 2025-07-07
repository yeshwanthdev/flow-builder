//environment based config
import { default as config } from "./env/default";
//others config
import { default as enums } from "./enums";

const commonConfig = {
  ...config,
  ...enums,

  //common configs for all environments
  themeStorageKey: "flow-application-theme",
};

export default commonConfig;
