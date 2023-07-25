let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shortner_link = document.getElementById("shortner_link");
let copy = document.getElementById("copy");

generate.addEventListener('click', () => {
   let url = original_link.value;
   fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
   .then((resp) => resp.json())
   .then((value) =>{
      shortner_link.value = value.result.short_link;
   })
   .catch((error) => {
      shortner_link.value = "Something went wrong!";
   });
});

copy.addEventListener('click', () => {
   navigator.clipboard.writeText(shortner_link.value);
   copy.innerHTML = "Copied!";

   setTimeout(() => {
      copy.innerHTML = "Copy";
   }, 1000);
});