import { Context } from './Context';

export abstract class ContextWrapper implements Context {
    readonly isContext: true = true;
    readonly ctx: Context;

    constructor(src: Context) {
        this.ctx = src;
    }
}