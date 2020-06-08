import { ContextSymbol, ContextValuesSymbol } from './../Context';
import { Context } from '../Context';
import { BaseContext } from '../BaseContext';

export class ContextImpl extends BaseContext {
    readonly [ContextSymbol]: Context;
    readonly [ContextValuesSymbol]: { [key: string]: any };

    constructor(values: { [key: string]: any }) {
        super();
        this[ContextValuesSymbol] = values;
        this[ContextSymbol] = this;
        Object.freeze(this);
    }
}