#!/bin/bash

if ! [ devenv ]; then
    cat .zshrc >> ~/.zshrc

    if [ -d ~/.local/share/dev ]; then
        rm -rf ~/.local/share/dev
    fi

else
    echo "already setup"
fi
