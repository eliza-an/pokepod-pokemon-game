

for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
    var list=[]
    list.push(value)
   console.log(list[2])
    list[0].includes("bulbasaur")===true

        const textsection= document.createElement("p");
    const paratext = document.createTextNode(key + ": " + value);
    textsection.appendChild(paratext);
    
    const appenddiv = document.getElementById("div1");
    appenddiv.appendChild(textsection);
    window.localStorage.removeItem(`debug`);
    window.localStorage.removeItem(`randomName`)

if(list[0].includes("pikachu")===true){
    cardImage.attr({
        src: "assets/images/pikachu_mini.png",
        alt: "pikachu"});;
}else if (list[0].includes("bulbasaur")===true){
cardImage.attr({
        src: "assets/images/bulbasaur_mini.png",
        alt: "bulbasaur"});
  }else if(list[0].includes("squirtle")===true){
    cardImage.attr({
        src: "assets/images/squirtle_mini.png",
        alt: "squirtle"});;
  }else if(list[0].includes("charmander")===true){
    cardImage.attr({
        src: "assets/images/charmander_mini.png",
        alt: "charmander"});;
  } else {
    cardImage.attr({
      src: "assets/images/meowth_mini.png",
      alt: "meowth"});;
  }  
  
}

