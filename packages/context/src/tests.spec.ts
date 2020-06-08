import { EmptyContext } from "./EmptyContext";
import { createContextNamespace } from "./createContextNamespace";
import { registerExtension } from "./registerExtension";

describe('Context', () => {
    it('should create context, namespace and update values', () => {
        let context = EmptyContext;
        let namespace = createContextNamespace<number | undefined>('test', 0);
        expect(namespace.get(context)).toBe(0);
        context = namespace.set(context, 10);
        expect(namespace.get(context)).toBe(10);
    });

    it('should extend context', () => {
        let context = EmptyContext;
        let namespace = createContextNamespace<number | undefined>('test', 10);
        registerExtension('test', (ctx) => {
            return namespace.get(ctx);
        });
        expect((context as any).test).toBe(10);
        context = namespace.set(context, 11);
        expect((context as any).test).toBe(11);
    });
});