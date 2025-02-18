[![npm](https://img.shields.io/npm/v/@googlemaps/typescript-guards)][npm-pkg]
![Release](https://github.com/googlemaps/js-typescript-guards/workflows/Release/badge.svg)
![Stable](https://img.shields.io/badge/stability-stable-green)
[![Tests/Build](https://github.com/googlemaps/js-typescript-guards/actions/workflows/test.yml/badge.svg)](https://github.com/googlemaps/js-typescript-guards/actions/workflows/test.yml)

[![codecov](https://codecov.io/gh/googlemaps/js-typescript-guards/branch/main/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-typescript-guards)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![solidarity](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

![Contributors](https://img.shields.io/github/contributors/googlemaps/js-typescript-guards?color=green)
[![License](https://img.shields.io/github/license/googlemaps/js-typescript-guards?color=blue)][license]
[![StackOverflow](https://img.shields.io/stackexchange/stackoverflow/t/google-maps?color=orange&label=google-maps&logo=stackoverflow)](https://stackoverflow.com/questions/tagged/google-maps)
[![Discord](https://img.shields.io/discord/676948200904589322?color=6A7EC2&logo=discord&logoColor=ffffff)][Discord server]

# Google Maps TypeScript Guards

## Description

This package provides [TypeScript guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) for the Google Maps JavaScript API.

A type guard (or type predicate) is an expression that performs a runtime check that guarantees the type in some scope. Type guards are used to narrow the type of a variable or parameter.

## Requirements

- [Sign up with Google Maps Platform]
- A Google Maps Platform [project] with the [**Maps Javascript API**][maps-sdk] enabled
- An [API key] associated with the project above
- Node.js and NPM

## Installation

Available via npm as the package [@googlemaps/typescript-guards](https://www.npmjs.com/package/@googlemaps/typescript-guards).

```
npm i @googlemaps/typescript-guards
```

## Documentation

For the complete API check the [documentation].

## Usage

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

## Contributing

Contributions are welcome and encouraged! If you'd like to contribute, send us a [pull request] and refer to our [code of conduct] and [contributing guide].

## Terms of Service

This library uses Google Maps Platform services. Use of Google Maps Platform services through this library is subject to the Google Maps Platform [Terms of Service].

This library is not a Google Maps Platform Core Service. Therefore, the Google Maps Platform Terms of Service (e.g. Technical Support Services, Service Level Agreements, and Deprecation Policy) do not apply to the code in this library.

## Support

This library is offered via an open source [license]. It is not governed by the Google Maps Platform Support [Technical Support Services Guidelines, the SLA, or the [Deprecation Policy]. However, any Google Maps Platform services used by the library remain subject to the Google Maps Platform Terms of Service.

This library adheres to [semantic versioning] to indicate when backwards-incompatible changes are introduced. Accordingly, while the library is in version 0.x, backwards-incompatible changes may be introduced at any time.

If you find a bug, or have a feature request, please [file an issue] on GitHub. If you would like to get answers to technical questions from other Google Maps Platform developers, ask through one of our [developer community channels]. If you'd like to contribute, please check the [contributing guide].

You can also discuss this library on our [Discord server].

[API key]: https://developers.google.com/maps/documentation/javascript/get-api-key
[maps-sdk]: https://developers.google.com/maps/documentation/javascript
[documentation]: https://googlemaps.github.io/js-typescript-guards
[npm-pkg]: https://npmjs.com/package/@googlemaps/typescript-guards

[code of conduct]: ?tab=coc-ov-file#readme
[contributing guide]: CONTRIBUTING.md
[Deprecation Policy]: https://cloud.google.com/maps-platform/terms
[developer community channels]: https://developers.google.com/maps/developer-community
[Discord server]: https://discord.gg/hYsWbmk
[file an issue]: https://github.com/googlemaps/js-typescript-guards/issues/new/choose
[license]: LICENSE
[project]: https://developers.google.com/maps/documentation/javascript/cloud-setup#enabling-apis
[pull request]: https://github.com/googlemaps/js-typescript-guards/compare
[semantic versioning]: https://semver.org
[Sign up with Google Maps Platform]: https://console.cloud.google.com/google/maps-apis/start
[similar inquiry]: https://github.com/googlemaps/js-typescript-guards/issues
[SLA]: https://cloud.google.com/maps-platform/terms/sla
[Technical Support Services Guidelines]: https://cloud.google.com/maps-platform/terms/tssg
[Terms of Service]: https://cloud.google.com/maps-platform/terms
