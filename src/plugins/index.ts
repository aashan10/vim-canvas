import { Vim } from "../vim"

export type Plugin = {
    render(vim: Vim): void;
    setup(vim: Vim): void;
}
