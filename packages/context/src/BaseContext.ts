import { Context, ContextSymbol } from './Context';

export abstract class BaseContext {
    abstract readonly [ContextSymbol]: Context;
}