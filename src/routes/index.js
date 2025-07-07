import { default as baseRoutes } from "./base";
import { default as errorRoutes } from "./error";
import { default as defaultRoutes } from "./default";
import { default as applicationRoutes } from "./application";

//add routes
const combinedRoutes = [baseRoutes, applicationRoutes, errorRoutes, defaultRoutes];

export default combinedRoutes;
