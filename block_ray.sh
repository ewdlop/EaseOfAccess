#!/bin/bash

# Stop the Ray cluster
ray stop

# Check if the process is still running
if pgrep -x "ray" > /dev/null; then
  echo "Ray process is still running."
else
  echo "Ray process has been stopped."
fi
