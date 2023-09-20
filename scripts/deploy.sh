#!/bin/bash

set -e
set -x

cd $PWD

assert(){
    if [[ -z "$2" ]]; then
        echo "no $1"
        exit 1
    fi
}

assert CLOUDFLARE_ACCOUNT_ID "$CLOUDFLARE_ACCOUNT_ID"
assert CLOUDFLARE_API_TOKEN "$CLOUDFLARE_API_TOKEN"
assert CLOUDFLARE_PAGES_PROJECT_NAME "$CLOUDFLARE_PAGES_PROJECT_NAME"
assert CLOUDFLARE_PAGES_PROJECT_BRANCH "$CLOUDFLARE_PAGES_PROJECT_BRANCH"

DIST_DIR="dist"

[ -d functions ]
[ -d "$DIST_DIR" ]

GIT_COMMIT="$(git rev-parse --short=8 HEAD)"
assert GIT_COMMIT "$GIT_COMMIT"

wrangler pages deploy "$DIST_DIR" \
    --project-name "$CLOUDFLARE_PAGES_PROJECT_NAME" \
    --branch "$CLOUDFLARE_PAGES_PROJECT_BRANCH" \
    --commit-dirty=true \
    --commit-hash "$GIT_COMMIT"

sleep 2s

wrangler pages deployment list \
    --project-name "$CLOUDFLARE_PAGES_PROJECT_NAME"
