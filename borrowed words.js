var c = readline().toLowerCase().split("");
var letters = ["c", "f", "j", "q", "v", "x", "z"];
 
//if c includes any of the borrowed letters, print "FOREIGN"
//else, print "PINOY"
 
var ans = "PINOY";
for (var i = 0; i < letters.length; i++) {
    if (c.includes(letters[i])) {
        ans = "FOREIGN";
    }
}
print(ans);