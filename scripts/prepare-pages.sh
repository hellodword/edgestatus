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

wrangler pages project create "$CLOUDFLARE_PAGES_PROJECT_NAME" --production-branch "$CLOUDFLARE_PAGES_PROJECT_BRANCH" || \
wrangler pages project list
