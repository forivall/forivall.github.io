---
layout: default
permalink: /json-schema-cheatsheet/
---

# JSON schema cheatsheet / quick reference

## Datatypes

* `"string"`: `"Hello World"`
* `"number"`: `1.23`
* `"integer"`: `123` `1.2e10`
* `"boolean"`: `true`
* `"object"`: `{"foo":"bar", "baz":"Hello World"}`
* `"array"`: `["foo","bar", 5,"hello"]`
* `"null"`: `null`

## Generic Keywords

* `id`
* `description`
* `default`
* `patternProperties`
* `dependencies`
* `extends`
* `$ref`
* `$schema`
* `allOf`, `anyOf`, `oneOf`

## Features

### `string` + `number` + `integer`
* `enum`: `[...]`
* `format`: `date-time`, `email`, `hostname`, `ipv4`, `ipv6`, `uri`

### `string`
* `minLength`, `maxLength`
* `pattern`: regexp

### `number` + `integer`
* `minimum`, `maximum`
* `exclusiveMinimum`, `exclusiveMaximum`
* `multipleOf`

### `array`
* `items`
* `minItems`, `maxItems`
* `uniqueItems`: enforce uniqueness
* `additionalItems`: if true, validation always passes

### `object`
* `properties`
* `minProperties`, `maxProperties`
* `patternProperties`: regex base properties
* `additionalProperties`: if true, validation always passes
* `required`

### JSON Schema Faker
* `faker`
