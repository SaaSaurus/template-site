set -e
npm run test -s | jq > ../../src/coda.json
