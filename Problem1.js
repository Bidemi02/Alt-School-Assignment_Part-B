function deepEqual(objA, objB) {
  // If they are exactly the same value
  if (objA === objB) {
    return true;
  }

  // If either is not an object, they are not equal
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // Get the keys
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // If they have different numbers of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check every key and value
  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(
  deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })
); // true

console.log(
  deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })
); // false

console.log(
  deepEqual({ a: 1 }, { a: 1, b: 2 })
); // false