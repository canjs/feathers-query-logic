# feathers-query-logic

[![Build Status](https://travis-ci.org/canjs/feathers-query-logic.svg?branch=master)](https://travis-ci.org/canjs/feathers-query-logic) [![Greenkeeper badge](https://badges.greenkeeper.io/canjs/feathers-query-logic.svg)](https://greenkeeper.io/)

FeathersJS configuration for can-query-logic

## Usage

Install:

```
npm i feathers-query-logic
```


Import this and add to your connections/models:

```js
import feathersQueryLogic from "feathers-query-logic";
import {realtimeRestModel, QueryLogic, DefineMap} from "can";

const Type = DefineMap.extend( ... )


realtimeRestModel({
  Map: Type,
	queryLogic: new QueryLogic(Type, feathersQueryLogic)
})
```
