function noop() {
  return null;
}

require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;
