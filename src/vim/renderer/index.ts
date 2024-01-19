import { Vim } from ".."
import { Plugin } from "../../plugins";

export type Renderable = {
    render(vim: Vim): void;
}

export type Renderer = {
    items: Array<Renderable>;
    render(vim: Vim): void;
    queue(item: Renderable): void;
}

export const create_renderer = (): Renderer => {
    const renderer: Renderer = {
        items: [],
        render(vim: Vim) {
            this.items.map((item: Renderable) => {
                item.render(vim);
            });
            vim.plugins.map((plugin: Plugin) => {
                plugin.render(vim);
            });
        },
        queue(item: Renderable) {
            this.items.push(item);
        }
    }

    return renderer;
}
