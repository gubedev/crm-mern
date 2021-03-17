export const HIDE_OVERLAY = "HIDE_OVERLAY"
export const SHOW_OVERLAY = "SHOW_OVERLAY"

export function hideOverlay() {
  return {
    type: HIDE_OVERLAY,
  }
}

export function showOverlay() {
  return {
    type: SHOW_OVERLAY,
  }
}
