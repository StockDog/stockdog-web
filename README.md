# StockDog Web
## Deployment
Deploying requires the [AWS CLI](https://aws.amazon.com/cli/) to installed.

Setup `aws configure` with the access key `s3-deploy` (ask Ashley for secret access key).

To deploy the frontend, use the commands:
```
npm run build
```
```
aws s3 sync build/ s3://stockdog-ui
```

Once complete, [www.stockdogapp.com](www.stockdogapp.com) should be updated.
## Components
### Listing
+ Use: Displaying a list of stocks a user is watching or owns.
#### Props
```
   listings: [
      title: <String>,
      desc: <String>,
      price: <Float>,
      amount: <Float> (0 will display nothing for watchlists)
   ]
```
