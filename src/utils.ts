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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expectType = <T>(obj: T): boolean => {
  return true;
};

export const executeGuard = <T>(fn: (obj: any) => boolean, obj: T): boolean => {
  return fn(obj) && expectType<T>(obj) ? true : false;
};

export const isValidTypeGuard =
  <T>(fn: (obj: any) => boolean) =>
  (obj: any) =>
    expect(executeGuard<T>(fn, obj)).toBe(true);
