// / <reference path="./models/drag-drop.ts" />
// / <reference path="./models/project.ts" />

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

// / <reference path="./components/project-item.ts" />
// / <reference path="./components/project-list.ts" />
// / <reference path="./components/project-input.ts" />

// here /// is special syntax understood by ts

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log("hello");
