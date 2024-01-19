export type VimConfig = {
    font_family: string;
    font_size: number;
    height: number;
    width: number; 
    mode: Mode;
    leader: string;
}

export enum Mode {
    Insert = 'insert',
    Visual = 'visual',
    Command = 'command',
    Normal = 'normal'
};

export const get_default_config = (): VimConfig  => {
    const config: VimConfig = {
        font_family: 'monospace',
        font_size: 18,
        height: 500,
        width: 500,
        mode: Mode.Normal,
        leader: ' '
    };

    return config;
}
