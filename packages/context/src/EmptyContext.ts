import { ContextImpl } from './impl/ContextImpl';
import { Context } from './Context';

export const EmptyContext: Context = new ContextImpl({});