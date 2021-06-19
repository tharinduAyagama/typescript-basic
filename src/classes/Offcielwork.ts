import { Work } from "../interfaces/Work.js";

export class OffcialWork implements Work {
  readonly priority;
  readonly detail;

  constructor(priority: string, detail: string) {
    this.priority = priority;
    this.detail = detail;
  }

  formatWork(): string {
    return `${this.detail} priority ${this.priority}`;
  }
}
