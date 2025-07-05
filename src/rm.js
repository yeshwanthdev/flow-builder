import * as lodash from "lodash";
import { v4 as uuid } from "uuid";

const guid = () => {
  return uuid();
};

export { lodash, guid };
