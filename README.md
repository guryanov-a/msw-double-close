# msw 3: a second `setupServer().close()` throws

`npm install`, then `node repro.mjs`.

- msw 3.0.4: the second `close()` throws `Invariant Violation: Failed to call "disable" on the network: already disabled`.
- msw 2.15.0 (`npm install msw@2.15.0`): the script prints `second close() returned without error`.
