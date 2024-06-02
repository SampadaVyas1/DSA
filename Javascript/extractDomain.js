// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let sourceString = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  // .split(/[/?#]/)[0];
  console.log(sourceString);
  let domain = sourceString.split(".")[0];
  console.log(domain);
}
console.log(domainName("http://google.co.jpx"));
