/**
 * File for the main application
 */
let outlineButton = document.querySelectorAll('.btn-outline-dark');
outlineButton.forEach((e, i) => e.addEventListener('click', activate));

function activate() {
    let self = this, activatedClass = 'btn-activated';
    
    if(!classie.has(this, activatedClass)) {
        classie.add( this, activatedClass );
        setTimeout(() => classie.remove(self, activatedClass), 500);
    }
}

/**
 * Highlight pass phrase after clicking generate.
 */
document.getElementById('generateButton').addEventListener('click', () => {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('passPhrase'));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById('passPhrase'));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
});