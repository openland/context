import { Context } from '../Context';

export class ContextImpl implements Context {
    readonly isContext: true = true;
    readonly values: { [key: string]: any };

    constructor(values: { [key: string]: any }) {
        this.values = values;
    }
}