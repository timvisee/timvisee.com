/**
 * Set and apply the normal or toggled theme.
 *
 * @param toggled Truthy value to show toggled, normal otherwise.
 */
function theme_set(toggled) {
    document.getElementById('style-dark').disabled = toggled;
    document.getElementById('style-light').disabled = !toggled;
    localStorage.setItem('theme-toggled', toggled ? '1' : '');
}

/**
 * Toggle the current theme.
 */
function theme_toggle() {
    theme_set(!document.getElementById('style-dark').disabled);
}

// Apply selected theme, stored in localStorage item
theme_set(localStorage.getItem('theme-toggled'));
