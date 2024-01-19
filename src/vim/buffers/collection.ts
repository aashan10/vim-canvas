import { Buffer } from "./buffer";

export class BufferCollection {

    items: Array<Buffer>;
    protected active: null|number;
    constructor()
    {
        this.active = null;
        this.items = [];
    }

    public get_active_buffer(): null|Buffer
    {
        if (this.active === null) {
            return null;
        }

        return this.items[this.active]
    }

    public set_active_buffer(bufnr: number): void
    {
        if (this.items[bufnr]) {
            this.active = bufnr;
        }
    }

    public prev_buffer(): void {
        if (this.active === null || this.active < 1) {
            this.set_active_buffer(this.items.length - 1);
        } else {
            this.set_active_buffer(this.active - 1);
        }
    }

    public next_buffer(): void {
        console.log(this.active, this.items.length);
        if (this.active === null || this.active >= this.items.length - 1) {
            this.set_active_buffer(0);
        } else {
            this.set_active_buffer(this.active + 1);
        }
    }
    public all(): Array<Buffer> {
        return this.items;
    }

    public add(buffer: Buffer) {
        this.items.push(buffer);
    }

    public bufnr(): null|number {
        return this.active;
    }
}
