import { blockContentType } from "./schemaTypes/blockContentType";
import { aboutType } from "./schemaTypes/about";
import { projectType } from "./schemaTypes/project";
import { settingsType } from "./schemaTypes/settings";

export const schema = {
  types: [blockContentType, aboutType, projectType, settingsType],
};
