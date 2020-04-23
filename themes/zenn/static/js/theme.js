/**
 * Set and apply the normal or toggled theme.
 *
 * @param toggled Truthy value to show toggled, normal otherwise.
 */
function theme_set(toggled) {
    if(!toggled) {
        document.getElementById('style-dark').disabled = false;
        document.getElementById('style-light').disabled = true;
    } else {
        document.getElementById('style-light').disabled = false;
        document.getElementById('style-dark').disabled = true;
    }

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

// CSS transitions are blocked on load, unblock when ready
document.addEventListener("DOMContentLoaded", function(event) {
    document.body.classList.remove('notransition');
});

function navbar_toggle() {
    document.getElementById('navbar').classList.toggle('visible');
}
