export class WorkItemTemplate {
    constructor(container) {
        this.container = container;
    }
    render(work, header) {
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
