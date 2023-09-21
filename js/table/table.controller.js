import Model from "../model.js";
import View from "./table.view.js";
const model = new Model();
const view = new View(model.getData().users);
