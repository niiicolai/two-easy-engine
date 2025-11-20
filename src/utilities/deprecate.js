const warned = new Set();

/**
 * An utility function for warning about deprecated functionality.
 * @param {string} oldName - The name of the deprecated function.
 * @param {string} newName - The name of the function to use instead.
 * @param {string} version - The version number where the function became deprecated.
 * @returns {void}
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
