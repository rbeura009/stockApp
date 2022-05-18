export function isEmptyObject(obj: Object | null | undefined) {
  if (obj && Object.keys(obj).length === 0) return true;
  else return false;
}
