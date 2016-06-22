// NOTE object below must be a valid JSON
window.Hesap = $.extend(true, window.Hesap, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
            {
                title: "Home",
                onExecute: "#home",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    }
});