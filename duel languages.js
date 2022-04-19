var n = parseInt(readline());
function isForbidden(c, forbidden) {
    var f = forbidden.split("");
    for (var i = 0; i < f.length; i++) {
        if (c.toUpperCase().includes(f[i])) {
            return true;
        }
    }
    
    return false;
}
 
function hasForbidden(s, forbidden) {
    for (var c of s) {
        if (isForbidden(c, forbidden)) {
            return true;
        }
    }
    return false;
}
 
var abakodaOnly = 0;
var hiramOnly = 0;
var bothAbakodaHiram = 0;
 
for (var i = 0; i < n; i++) {
    var r = readline();
    var hasAbakoda = hasForbidden(r, "ABKD");
    var hasHiram = hasForbidden(r, "CFJQVXZ");
    
    if (hasAbakoda && hasHiram) {
        bothAbakodaHiram++;
    } else if (hasAbakoda) {
        abakodaOnly++;
    } else if (hasHiram) {
        hiramOnly++;
    }
}
 
var ans = 0;
ans += abakodaOnly * hiramOnly * bothAbakodaHiram;
ans += abakodaOnly * bothAbakodaHiram * (bothAbakodaHiram - 1);
ans += bothAbakodaHiram * hiramOnly * (bothAbakodaHiram - 1);
ans += bothAbakodaHiram * (bothAbakodaHiram - 1) * (bothAbakodaHiram - 2);
 
print(ans);