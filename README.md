# nitro-mono reproduction

This reproduction repo is intended to demonstrate how using nitro-nightly crashes TanStack Start apps using bun in a Turbo monorepo.

## How to

First, install the dependencies:

```bash
bun install
```

Then, cd into `apps/web` and run `bun dev`. The server runs fine.

If you cd into `apps/nitro-nightly` and do the same, you'll notice that the dev server crashes.

The dev server only seems to crash when used inside the monorepo. If you copy the application elsewhere and run it, it works fine.
