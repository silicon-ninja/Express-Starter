# Express Starter

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

```csharp
This Uses JavaScript ES6 Syntax.
```
### This repository contains the starter template for your backend express node server for production and devlopment.

---
## </b>Local Deployment</b>
### Step 1 : To install all the dependencies
 
 ```bash
 npm install
 ```
### Step 2 : To set .env variables on a Linux machine or a UNIX machine
 
 ```bash
 export $(cat .env | xargs)
 ```
### Step 3 : To run the Server in devlopment mode
 
 ```bash
 npm run dev
 ```

### Step 3 : To run the Server in production mode
 
 ```bash
 npm start
 ```
---
## <b>Production Deployment using Docker</b>

```csharp
Note :'Dont Forget to add your env variables.'
```
### Step 1 : Build your Docker image by running the following command 
```bash
docker build -t <your-project-name> .
```

### Step 2 : Run your Docker image by running the following command 
```bash
docker run -p <project-port>:<mapping-port> <your-project-name>
```
