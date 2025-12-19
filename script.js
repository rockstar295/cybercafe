const output = document.getElementById('output');


function run() {
let text = document.getElementById('input').value;
let key = document.getElementById('key').value;
let op = document.getElementById('operation').value;


try {
switch(op) {
case 'caesar': output.value = caesar(text, parseInt(key||0)); break;
case 'rot13': output.value = caesar(text, 13); break;
case 'base64enc': output.value = btoa(text); break;
case 'base64dec': output.value = atob(text); break;
case 'hexenc': output.value = toHex(text); break;
case 'hexdec': output.value = fromHex(text); break;
case 'urlenc': output.value = encodeURIComponent(text); break;
case 'urldec': output.value = decodeURIComponent(text); break;
case 'xor': output.value = xor(text, key); break;
case 'atbash': output.value = atbash(text); break;
case 'aes': output.value = xor(text, key); break; // demo
}
} catch(e) {
output.value = 'Error: ' + e.message;
}
}


function caesar(str, shift) {
return str.replace(/[a-z]/gi, c =>
String.fromCharCode((c.charCodeAt(0) + shift - (c <= 'Z' ? 65 : 97)) % 26 + (c <= 'Z' ? 65 : 97))
);
}


function toHex(str) {
return Array.from(str).map(c => c.charCodeAt(0).toString(16)).join(' ');
}


