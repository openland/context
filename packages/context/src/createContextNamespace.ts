import { ContextNamespaceImpl } from './impl/ContextNamespaceImpl';
import { ContextNamespace } from './ContextNamespace';

export function createContextNamespace<T>(name: string, defaultValue: T): ContextNamespace<T> {
    return new ContextNamespaceImpl<T>(name, defaultValue);
}