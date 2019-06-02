import { Context } from './Context';

export interface ContextNamespace<T> {
    get(context: Context): T;
    set(context: Context, value: T): Context;
}