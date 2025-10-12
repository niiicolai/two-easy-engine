for f in src/**/*.js; do
  base=$(basename "$f" .js)
  npx jsdoc2md "$f" > "docs/api/$base.md"
done