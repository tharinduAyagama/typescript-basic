import { Work } from "../interfaces/Work";

export class WorkItemTemplate {
  constructor(private container: HTMLUListElement) {}

  render(work: Work, header: string) {
    const container = document.createElement("li");
    const head = document.createElement("h4");
    const details = document.createElement("p");

    head.innerText = header;
    details.innerText = work.formatWork();

    container.append(head);
    container.append(details);
    this.container.append(container);
  }
}
