import { Context, ContextSymbol } from './Context';
import { BaseContext } from './BaseContext';

export abstract class ContextWrapper extends BaseContext {
    readonly [ContextSymbol]: Context;

    constructor(src: Context) {
        super();
        this[ContextSymbol] = src;
        Object.freeze(this);
    }
}