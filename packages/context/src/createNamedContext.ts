import { Context } from './Context';
import { ContextName } from './ContextName';
import { EmptyContext } from './EmptyContext';

export function createNamedContext(name: string): Context {
    return ContextName.set(EmptyContext, name);
}