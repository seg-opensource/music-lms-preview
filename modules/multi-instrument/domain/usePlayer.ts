export const usePlayer = () => {
  const state = { playing: false }

  const play = () => state.playing = true
  const stop = () => state.playing = false

  return { state, play, stop }
}
