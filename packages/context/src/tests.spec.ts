import { EmptyContext } from "./EmptyContext";
import { createContextNamespace } from "./createContextNamespace";

describe('Context', () => {
    it('should create context, namespace and update values', () => {
        let context = EmptyContext;
        let namespace = createContextNamespace<number | undefined>('test', 0);
        expect(namespace.get(context)).toBe(0);
        context = namespace.set(context, 10);
        expect(namespace.get(context)).toBe(10);
    });
});