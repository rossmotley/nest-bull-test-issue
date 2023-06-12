# nest-bull-test-issue

Example repo for [Jest test suite issue](https://github.com/nestjs/bull/issues/1650).

To reproduce, run:

```
docker compose run --rm main npm run test:e2e
```

The tests will hang for ~30s after running, which is the interval of the stalled timer.
