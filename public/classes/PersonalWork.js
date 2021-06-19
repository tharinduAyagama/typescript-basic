export class PersonalWork {
    constructor(priority, detail) {
        this.priority = priority;
        this.detail = detail;
    }
    formatWork() {
        return `${this.detail} priority ${this.priority}`;
    }
}
