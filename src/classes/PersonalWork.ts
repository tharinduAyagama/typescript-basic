import { Work } from "../interfaces/Work.js";

export class PersonalWork implements Work {
  readonly priority;
  readonly detail;

  constructor(priority: string, detail: string) {
    this.priority = priority;
    this.detail = detail;
  }

  formatWork() {
    return `${this.detail} priority ${this.priority}`;
  }
}
