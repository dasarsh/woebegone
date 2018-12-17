export class Section {
    name: string;
    updated: Date;
    upvotes: number;
    link: URL;
    nsfw: boolean;
    tag: string;

    constructor(name: string, updated: Date, link: URL, nsfw: boolean, tag: string) {
        this.name = name;
        this.updated = updated;
        this.link = link;
        this.nsfw = nsfw;
        this.tag = tag;
    }
}