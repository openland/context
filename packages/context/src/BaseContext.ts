import { Context, ContextSymbol } from './Context';

export abstract class BaseContext implements Context {
    abstract readonly [ContextSymbol]: Context;
}