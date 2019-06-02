import { ContextNamespace } from '../ContextNamespace';
import { Context } from '../Context';
import { ContextImpl } from './ContextImpl';
import { ContextWrapper } from '../ContextWrapper';

export class ContextNamespaceImpl<T> implements ContextNamespace<T> {
    readonly name: string;
    readonly defaultValue: T | undefined;

    constructor(name: string, defaultValue?: T) {
        this.name = name;
        this.defaultValue = defaultValue;
    }

    get(context: Context): T {
        let raw: ContextImpl;
        if (context instanceof ContextImpl) {
            raw = context;
        } else {
            raw = (context as ContextWrapper).ctx as ContextImpl;
        }
        if (!raw) {
            console.log(context);
        }
        let val = raw.values[this.name];
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
        let raw: ContextImpl;
        if (context instanceof ContextImpl) {
            raw = context;
        } else {
            raw = (context as ContextWrapper).ctx as ContextImpl;
        }
        let values = { ...raw.values };
        values[this.name] = value;
        return new ContextImpl(values);
    }
}