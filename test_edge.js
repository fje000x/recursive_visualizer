var fs = require('fs');
var code = fs.readFileSync('script.js', 'utf8');
var fns = [
  'generateMergeSortedArrayEdgeHistory',
  'generateRemoveElementEdgeHistory',
  'generateRemoveDuplicatesEdgeHistory',
  'generateBestTradeEdgeHistory',
  'generateBestTradesEdgeHistory',
  'generateCanReachEndEdgeHistory',
  'generateTrappedRainwaterEdgeHistory',
  'generateValidPalindromeEdgeHistory',
  'generateValidParenthesesEdgeHistory',
  'generateDominantElementEdgeHistory',
  'generateIsSubsequenceEdgeHistory',
  'generateTwoSumIIEdgeHistory',
  'generateCycleArrayEdgeHistory'
];

var pass = 0, fail = 0;
fns.forEach(function(name) {
  var s = code.indexOf('function ' + name + '(');
  if (s === -1) { s = code.indexOf('function ' + name); }
  if (s === -1) { console.log('MISSING: ' + name); fail++; return; }
  var bc = 0;
  var openBrace = code.indexOf('{', s);
  var i = openBrace;
  do {
    if (code[i] === '{') bc++;
    if (code[i] === '}') bc--;
    i++;
  } while (bc > 0 && i < code.length);
  var fc = code.substring(s, i);
  try {
    var fn = new Function('return (' + fc + ')()');
    var r = fn();
    if (!Array.isArray(r)) { console.log('FAIL ' + name + ': not array'); fail++; return; }
    if (r.length === 0) { console.log('FAIL ' + name + ': empty'); fail++; return; }
    var last = r[r.length - 1];
    console.log('OK   ' + name + '  steps=' + r.length + '  complete=' + !!last.isComplete);
    pass++;
  } catch(e) {
    console.log('ERR  ' + name + ': ' + e.message);
    fail++;
  }
});

console.log('\nTotal: ' + pass + ' pass, ' + fail + ' fail');
