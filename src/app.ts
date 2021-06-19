import { OffcialWork } from "./classes/Offcielwork.js";
import { PersonalWork } from "./classes/PersonalWork.js";
import { WorkItemTemplate } from "./classes/WorkItemTemplate.js";
import { Work } from "./interfaces/Work";

let form = document.querySelector(".new-item-form") as HTMLFormElement;

let type = document.querySelector("#type") as HTMLInputElement;
let priority = document.querySelector("#priority") as HTMLInputElement;
let work = document.querySelector("#work") as HTMLInputElement;
let container = document.querySelector("ul")!;

let workObj: Work;

let templete: WorkItemTemplate;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (type.value === "personal") {
    workObj = new PersonalWork(priority.value, work.value);
  } else {
    workObj = new OffcialWork(priority.value, work.value);
  }

  templete = new WorkItemTemplate(container);

  templete.render(workObj, type.value);
});
