#!/usr/bin/env bash
echo "Installing Node 10.1.0..."
set -ex
brew uninstall node@6
NODE_VERSION="10.1.0"
curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"