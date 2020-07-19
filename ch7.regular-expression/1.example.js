const parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

const url= "http://www.ora.com:80/goodparts?q#fragment";

const result = parse_url.exec(url);

const names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

const blanks = '      ';
console.log(result);
let i;
for (i = 0; i < names.length; i += 1) {
  console.log(`${names[i]}: ${blanks.substring(names[i].length)}${result[i]}`);
}
