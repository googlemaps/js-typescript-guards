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

import { isLatLngLiteral, isLatLngOrLatLngLiteral } from "./lat-lng";
import { isValidTypeGuard } from "./utils";
import { initialize } from "@googlemaps/jest-mocks";

initialize();

describe("isLatLngLiteral", () => {
  test.each([null, undefined, { lat: 0 }, { lng: 0 }])("invalid: %#", (obj) => {
    expect(isLatLngLiteral(obj)).toBe(false);
  });

  test.each([{ lat: 0, lng: 0 }])(
    "valid: %#",
    isValidTypeGuard<google.maps.LatLngLiteral>(isLatLngLiteral)
  );
});

describe("isLatLngOrLatLngLiteral", () => {
  test.each([null, undefined, { lat: 0 }, { radius: 0 }])(
    "invalid: %#",
    (obj) => {
      expect(isLatLngOrLatLngLiteral(obj)).toBe(false);
    }
  );

  test.each([{ lat: 0, lng: 0 }, new google.maps.LatLng(0, 0)])(
    "valid: %#",
    isValidTypeGuard<google.maps.LatLng | google.maps.LatLngLiteral>(
      isLatLngOrLatLngLiteral
    )
  );
});
