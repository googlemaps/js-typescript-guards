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

/* eslint-disable @typescript-eslint/no-explicit-any */

export const isLatLngBoundsLiteral = (
  obj: any
): obj is google.maps.LatLngBoundsLiteral =>
  obj != null &&
  typeof obj === "object" &&
  Number.isFinite(obj.east) &&
  Number.isFinite(obj.north) &&
  Number.isFinite(obj.south) &&
  Number.isFinite(obj.west);

export const isLatLngBoundsOrLatLngBoundsLiteral = (
  obj: any
): obj is google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral =>
  obj instanceof google.maps.LatLngBounds || isLatLngBoundsLiteral(obj);
