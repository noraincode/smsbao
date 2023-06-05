# smsbao

> A node.js client for smsbao.com (Un-offical version)

# Installation

```
npm i smsbao
```

OR

```
yarn add smsbao
```

# Usage

```
import { Client} from 'smsbao'

const client = new Client({
    user_name: "Input your smsbao.com user name",
    product_id: "Input your smsbao.com product id, contact support for the detail",
    api_key: "Input your API Key"
})

// Send a sms
await client.sendSMS("Input send to phone number", "Input SMS Content")

// Get remain quota
await client.getQuota()

```

# Ref

https://www.smsbao.com/openapi/213.html
