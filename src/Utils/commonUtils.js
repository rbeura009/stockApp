export function isEmptyObject(obj) {
  if (obj && Object.keys(obj).length === 0) return true;
  else return false;
}
