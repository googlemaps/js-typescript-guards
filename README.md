# Google Maps TypeScript Guards

[![npm](https://img.shields.io/npm/v/@googlemaps/typescript-guards)](https://www.npmjs.com/package/@googlemaps/typescript-guards)
![Build](https://github.com/googlemaps/js-typescript-guards/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-typescript-guards/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-typescript-guards/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-typescript-guards)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-typescript-guards?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)](https://discord.gg/jRteCzP)

## Description

This package provides [TypeScript guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) for the Google Maps JavaScript API. 

A type guard (or type predicate) is an expression that performs a runtime check that guarantees the type in some scope. Type guards are used to narrow the type of a variable or parameter.

## Documentation

For the complete API check the [reference documentation](https://googlemaps.github.io/js-typescript-guards/index.html).

## Install

Available via npm as the package [@googlemaps/typescript-guards](https://www.npmjs.com/package/@googlemaps/typescript-guards).

```sh
npm i @googlemaps/typescript-guards
```

## Example

The following example narrows a union type `google.maps.LatLng | google.maps.LatLngLiteral` to `google.maps.LatLngLiteral` using the `isLatLngLiteral` guard.

```typescript
import { isLatLngLiteral } from "@googlemaps/typescript-guards";

const latLng: google.maps.LatLng | google.maps.LatLngLiteral = ...;

if (isLatLngLiteral(latLng)) {
  lat = latLng.lat;
  lng = latLng.lng;
} else {
  lat = latLng.lat();
  lng = latLng.lng();
}
```
