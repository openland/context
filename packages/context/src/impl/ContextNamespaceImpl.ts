import { ContextSymbol, ContextValuesSymbol } from './../Context';
import { ContextNamespace } from '../ContextNamespace';
import { Context } from '../Context';
import { ContextImpl } from './ContextImpl';

export class ContextNamespaceImpl<T> implements ContextNamespace<T> {
    readonly name: string;
    readonly defaultValue: T | undefined;

    constructor(name: string, defaultValue?: T) {
        this.name = name;
        this.defaultValue = defaultValue;
        Object.freeze(this);
    }

    get(context: Context): T {
        if (!context[ContextSymbol]) {
            throw Error('Invalid context object');
        }

        let raw = context[ContextSymbol] as ContextImpl;
        let values = raw[ContextValuesSymbol] as { [key: string]: any };
        let val = values[this.name];
        if (val) {
            return val as T;
        } else {
            if (this.defaultValue === undefined) {
                throw Error('Context ' + this.name + ' is not set');
            } else {
                return this.defaultValue;
            }
        }
    }

    set(context: Context, value: T | undefined): Context {
        if (!context[ContextSymbol]) {
            throw Error('Invalid context object');
        }

        let raw = context[ContextSymbol] as ContextImpl;
        let values = { ...(raw[ContextValuesSymbol] as { [key: string]: any }) };
        values[this.name] = value;
        return new ContextImpl(values);
    }
}