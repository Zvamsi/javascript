let button_class=document.querySelector(".js-button");
         button_class.classList.add("test")
         let bool=button_class.classList.contains("js-button");
         console.log(button_class);
         console.log(bool);

         function gaming_onclick(name){
            if(name=="js-gaming"){
               let music=document.querySelector(".js-music");
               let tech=document.querySelector(".js-tech");
               music.classList.remove("is-toggled");
               tech.classList.remove("is-toggled")
            }
            if(name=="js-tech"){
               let gaming=document.querySelector(".js-gaming");
               let music=document.querySelector(".js-music");
               music.classList.remove("is-toggled");
               gaming.classList.remove("is-toggled");
            }
            if(name=="js-music"){
               let gaming=document.querySelector(".js-gaming");
               let tech=document.querySelector(".js-tech");
               gaming.classList.remove("is-toggled");
               tech.classList.remove("is-toggled");
            }
            let name2=document.querySelector(`.${name}`);
            
         if(name2.classList.contains("is-toggled")){
            name2.classList.remove("is-toggled");
         }else{
            name2.classList.add("is-toggled");
         }
         }
         
         //console.log(gaming);
