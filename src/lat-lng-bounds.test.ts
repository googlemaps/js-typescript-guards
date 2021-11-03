/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  isLatLngBoundsLiteral,
  isLatLngBoundsOrLatLngBoundsLiteral,
} from "./lat-lng-bounds";
import { isValidTypeGuard } from "./utils";
import { initialize } from "@googlemaps/jest-mocks";

initialize();

const { north, south, east, west } = {
  north: 0,
  south: 0,
  east: 0,
  west: 0,
};

describe("isLatLngBoundsLiteral", () => {
  test.each([
    null,
    undefined,
    {},
    { north, south, east },
    { north, south, east, west: "foo" },
  ])("invalid: %#", (obj) => {
    expect(isLatLngBoundsLiteral(obj)).toBe(false);
  });

  test.each([{ north, south, east, west }])(
    "valid: %#",
    isValidTypeGuard<google.maps.LatLngBoundsLiteral>(isLatLngBoundsLiteral)
  );
});

describe("isLatLngBoundsOrLatLngBoundsLiteral", () => {
  test.each([null, undefined, {}, { north }])("invalid: %#", (obj) => {
    expect(isLatLngBoundsOrLatLngBoundsLiteral(obj)).toBe(false);
  });

  test.each([{ north, south, east, west }, new google.maps.LatLngBounds()])(
    "valid: %#",
    isValidTypeGuard<
      google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
    >(isLatLngBoundsOrLatLngBoundsLiteral)
  );
});
