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

import { isCircleLiteral, isCircleOrCircleLiteral } from "./circle";
import { isValidTypeGuard } from "./utils";
import { initialize } from "@googlemaps/jest-mocks";

initialize();

describe("isCircleLiteral", () => {
  test.each([null, undefined, { center: { lat: 0, lng: 0 } }, { radius: 0 }])(
    "invalid: %#",
    (obj) => {
      expect(isCircleLiteral(obj)).toBe(false);
    }
  );

  test.each([{ center: { lat: 0, lng: 0 }, radius: 0 }])(
    "valid: %#",
    isValidTypeGuard<google.maps.CircleLiteral>(isCircleLiteral)
  );
});

describe("isCircleOrCircleLiteral", () => {
  test.each([null, undefined, { center: { lat: 0, lng: 0 } }, { radius: 0 }])(
    "invalid: %#",
    (obj) => {
      expect(isCircleOrCircleLiteral(obj)).toBe(false);
    }
  );

  test.each([
    { center: { lat: 0, lng: 0 }, radius: 0 },
    new google.maps.Circle(),
  ])(
    "valid: %#",
    isValidTypeGuard<google.maps.Circle | google.maps.CircleLiteral>(
      isCircleOrCircleLiteral
    )
  );
});
