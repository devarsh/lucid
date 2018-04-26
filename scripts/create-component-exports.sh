#!/usr/bin/env bash
COMPONENT_NAME=$1

if [ -z "$COMPONENT_NAME" ]; then
	echo 'Must specify a component name.'
	exit
fi

`npm bin`/jscodeshift --transform ./scripts/create-component-exports-transform.js ./src/index.js --run-in-band --component=$COMPONENT_NAME
`npm bin`/eslint ./src/index.js --fix > /dev/null 2>&1
echo "Exported ${COMPONENT_NAME} in src/index.js";

