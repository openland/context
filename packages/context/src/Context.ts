export interface Context { }

export const ContextSymbol = Symbol();
export const ContextValuesSymbol = Symbol();

export function isContext(src: any): src is Context {
    return !!src[ContextValuesSymbol];
}