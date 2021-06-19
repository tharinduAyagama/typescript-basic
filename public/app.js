import { OffcialWork } from "./classes/Offcielwork.js";
import { PersonalWork } from "./classes/PersonalWork.js";
import { WorkItemTemplate } from "./classes/WorkItemTemplate.js";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let priority = document.querySelector("#priority");
let work = document.querySelector("#work");
let container = document.querySelector("ul");
let workObj;
let templete;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "personal") {
        workObj = new PersonalWork(priority.value, work.value);
    }
    else {
        workObj = new OffcialWork(priority.value, work.value);
    }
    templete = new WorkItemTemplate(container);
    templete.render(workObj, type.value);
});
