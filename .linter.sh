#!/bin/bash
cd /home/kavia/workspace/code-generation/webtictactoe-61740-27749ba4/webtictactoe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

