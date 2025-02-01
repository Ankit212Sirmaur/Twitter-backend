let str = "making some #tweet on my #social_media #2025 #2025";
// first filter out #hashtag then remove # from all words 
let tags = str.match(/#[a-zA-Z0-9_]+/g).map(t => t.substring(1).toLocaleLowerCase());
let unique = new Set(tags);
let convertToArr = {...unique}