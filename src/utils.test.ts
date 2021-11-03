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

import { isLatLngLiteral } from ".";
import { executeGuard } from "./utils";

describe("executeGuard", () => {
  test.each([null, ""])("should return false: %#", (obj) => {
    expect(executeGuard<string>(isLatLngLiteral, obj)).toBe(false);
  });

  test.each([1, { lat: 0 }])("should not compile: %#", (obj) => {
    // @ts-expect-error
    expect(executeGuard<string>(isLatLngLiteral, obj)).toBe(false);
  });
});
