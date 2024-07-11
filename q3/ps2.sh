#!/bin/bash
sleep 10
FILE="./hello.txt"
SCRIPT="./ps1.sh"



if [ -f "$FILE" ]; then
  LINE_COUNT=$(wc -l < "$FILE")


  if [ "$LINE_COUNT" -ge 10 ]; then # wc -l retusn 10 || 10+
    PID=$(pgrep -f ps1.sh) # pgrep used for retrieve ps id from file(without ps + grep + cut/awk)
    
    if [ -n "$PID" ]; then
      kill "$PID" # ps kill eder.
    fi

    rm -f "$FILE"

    "$SCRIPT" & # tekrar run eder.
  fi
fi
