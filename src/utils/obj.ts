export function areObjectsEqual(obj1: any, obj2: any) {


    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and values are the same
  for (const key of keys1) {
    if (obj1[key as keyof typeof obj1] !== obj2[key as keyof typeof obj2]) {
      return false;
    }
  }

  return true;
}
