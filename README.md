# Statto (Serverless) Functions

Collectioning lottery results from many sources to experiment with databases,
search/analytics engines, messaging and other things.

- [South African National Lottery](./za-lottery/README.md)

## Dependencies

- [AWS SDK](https://github.com/aws/aws-sdk-js) AWS client libaries
- [Axios](https://github.com/axios/axios) for HTTP requests
- [Middy](https://github.com/middyjs/middy) for middlewares

## ToDO

- Inherit individual serverless.yml files from a "master" config
- Organise folders into inputs (competitions) and outputs (messaging/storage)
