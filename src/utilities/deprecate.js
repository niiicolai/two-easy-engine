const warned = new Set();

/**
 * A utility function for warning about deprecated functionality
 * @param {string} oldName
 * @param {string} newName
 * @param {string} version
 */
export function deprecate(oldName, newName, version) {
  const key = `${oldName}:${newName}`;

  if (warned.has(key)) {
    return;
  }

  const message =
    `[DEPRECATION] '${oldName}' is deprecated since version ${version}. ` +
    `Please use '${newName}' instead. This feature will be removed in a future release.`;

  console.warn(message);
  warned.add(key);
}
