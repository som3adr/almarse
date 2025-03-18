// ... (i18next initialization, language switching logic) ...
//example
i18next.init({
    lng: 'en',
    resources: {
        en: { translation: { /* English translations */ } },
        fr: { translation: { /* French translations */ } },
        ar: { translation: { /* Arabic translations */ } }
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = i18next.t(el.dataset.i18n);
    });
}

document.querySelectorAll('#language-selector button').forEach(button => {
    button.addEventListener('click', () => {
        i18next.changeLanguage(button.dataset.lang, updateContent);
    });
});
