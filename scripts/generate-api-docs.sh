
OUTPUT_DIR="docs/api"

# Create output dir if it doesn't exists
if [ ! -d "$OUTPUT_DIR" ]; then
  mkdir $OUTPUT_DIR
fi

# Create markdown file for JavaScript files
for f in src/**/*.js; do
  base=$(basename "$f" .js)
  npx jsdoc2md "$f" > "$OUTPUT_DIR/$base.md"
done
