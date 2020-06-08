import { Context } from './Context';
import { BaseContext } from './BaseContext';

const registrators = new Set<string>();
export function registerExtension(name: string, handler: (ctx: Context) => any) {
    if (registrators.has(name)) {
        throw Error('Extension already registered: ' + name);
    }
    registrators.add(name);
    Object.defineProperty(BaseContext.prototype, name, {
        get() {
            return handler((this as Context));
        }
    });
}