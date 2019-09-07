# South African National Lottery

Uses a [shared request libary](../lib/request/ithuba.js).

## Running locally

```
serverless invoke local --function allDraws
```

```
serverless invoke local --function singleDraw --context '{ "draw": 1950 }'
```
