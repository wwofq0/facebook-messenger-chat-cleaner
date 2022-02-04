(function run() {
let all = document.querySelectorAll('div[aria-label="Menu"]');
if (all.length == 0) return;
let a = all[0];
a.click();
setTimeout(() => {
document.querySelectorAll('div[role=menuitem]').forEach(act => {
if (act.innerText.match(/Archive/)) act.click();
});
run();
}, 500);
})();
