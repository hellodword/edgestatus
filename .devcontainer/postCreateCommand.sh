#! /bin/bash

set -e
set -x

# https://docs.npmjs.com/cli/v8/commands/npm-completion
npm completion >> ~/.bashrc

cat << EOF >> ~/.bashrc
export PATH="$PATH:~/.local/bin"
EOF

mkdir -p ~/.local/bin

sudo apt-get update
sudo apt-get install -y \
  vim \
  bash-completion

npm ci
