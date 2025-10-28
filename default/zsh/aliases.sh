function __is_available {
  prog="${1}"
  os="${2}"

  if [ "${os}" != "" ] && [ "${os}" != "${OS}" ]
  then 
    return 1
  fi

  type "${prog}" > /dev/null 
  return "$?"
}

__is_available tickrs \
&&alias qm='tickrs -s $(cat ~/workspace/qm.txt | tr "\n" " " | 
    sed "s/[[:space:]]*$//")'

__is_available nvim \
&& alias vi=nvim \
&& alias vim=nvim \
&& alias n='nvim .' \
&& export EDITOR="nvim"

__is_available yt-dlp \
&& alias ytpl='yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" "$1"'

__is_available eza \
&& alias ls='eza'

__is_available tmux \
&& alias :q='[ -n "$TMUX" ] && tmux detach || exit' \
&& alias tt='tmux new-session -s fun -c ~ -n home ";" new-window -c ~ -n zsh ";" select-window -t home'

__is_available fzf \
&& alias d='cd $(find . -type d -name ".git" -prune -o -type d -print | fzf) && ls' \
&& alias dc='cd && cd $(find . -type d -name ".git" -prune -o -type d -print | fzf) && ls' \
&& alias nv='nvim $(fzf -m --preview="bat --color=always {}" --preview-window=right:70% )'

__is_available kitty \
&& alias paint='kitty icat'

__is_available python \
&& alias activate='source .venv/bin/activate --active'




__is_available devenv \
&& alias cc='config-notify ~/.config' \
&& alias ch='config-notify ~/.config/hypr' \
&& alias cn='config-notify ~/.config/nvim' \
&& alias cg='config-notify ~/.config/ghostty' \
&& alias cw='config-notify ~/.config/waybar' \
&& alias ti='tmux-init-dir-sesh' \
&& alias tid='tmux-init-dir-sesh-d' \
&& alias ta='tmux-fzf-attach-sesh' \
&& alias tk='tmux-fzf-kill-sesh' \
&& alias gc='git-clone-sesh' \
&& alias gcd='git-clone-sesh-d' \
&& alias abg='add-background' \
&& alias rbg='remove-background'

alias a='cd && clear'
alias zsh='vim ~/.zshrc'
alias zz='source ~/.zshrc && echo Config reloaded'
