export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';

export function hideSidebar() {
    return {
        type: HIDE_SIDEBAR
    }
}

export function showSidebar() {
    return {
        type: SHOW_SIDEBAR
    }
}