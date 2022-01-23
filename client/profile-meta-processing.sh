#!/bin/bash

jq -r '. | with_entries( select(.key | startswith("__") and endswith("__") | not) )' ./src/profile.json > ./src/meta.json
