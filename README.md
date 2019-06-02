# @openland/context
Simple and universal context passing for NodeJS applications.

## Use cases
* Pass transactions
* Provide context information for logging (user id, email, connection, etc)
* Instrument code for APM (like OpenTracing)
* Security context for operations
* Pass execution lifetime for automatically canceling of requests

## How to use
This library provides immutable `Context` object that you should pass as first argument everywhere in your codebase (where needed). In practice this is very easy to use and no support needed once integrated.

## Example

```typescript
import { Context, emptyContext, createContextNamespace } from '@openland/context';

const logNamespace = createContextNamespace<string>('log' /* Id of the namespace */, 'main' /* Default value */);

function withLog(ctx: Context, name: string): Context {
   return logNamespace.set(ctx, name)
}

function log(ctx: Context, message: string) {
   console.log(logNamespace.get(ctx) + ': ' + message);
}

let context = withLog(emptyContext, 'root');
log(context, 'Root message');
context = withLog(context, 'request');
log(context, 'Request message');

```

will output:
```bash
root: Root message
request: Request message
```

## Why not Async Hooks?
Async Hooks have huge performance problems (simple nodejs can handle 1m of promise resolving per second, but with asyc hooks it became ~1k per second) and can cause very serious and hard to find bugs. With async_hooks context passing is implicit and in practice you can't control **what context goes to which callback**. Example from our practice (feels scary for me):

```
class SomeLazySingletonClass {
  constructor() {
      (async () => {
        while(true) {
            // Do something with context
        }
      })();
  }
}

let singletonInstance = undefined;

function getSingleton() {
  if (!singletonInstance) {
    singletonInstance = 
  }
}

async function sendMessage() {
  await inTx(async () => {
    let singleton = getSingleton();
    await singleton.doSomeWork();
  })
}

```

Infinite loop from singleton constructor will inherit context from sendMessage. This means that it will try to use transaction from sendMessage, authentication information, etc. Such mistakes are extremly easy to make especially if you have more than one developer in your team.

## Inspiration
* [Scala implicit parameters](https://docs.scala-lang.org/tour/implicit-parameters.html)
* [Go Context](https://golang.org/pkg/context/)

## License
MIT (c) Data Makes Perfect LLC
