import { ContextNamespace } from './ContextNamespace';

export type ContextNamespaceType<TContext extends ContextNamespace<any>> =
    TContext extends ContextNamespace<infer T> ? T : never;