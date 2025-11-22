// Завдання 2:
let img = document.querySelector('img');

document.getElementById("add").addEventListener("click",()=>{
    if(img.style.display === "none")
          img.style.display = "block";
})

document.getElementById("increase").addEventListener("click",()=>{
    if(img.style.display !== "none" && img.width < 700){
        img.width += 20;
        img.height += 20;
        window.scrollBy({ top: 20, left: 0, behavior: 'smooth' });
    }
})

document.getElementById("decrease").addEventListener("click",()=>{
    if(img.style.display !== "none" && img.height > 20){
        img.width -= 20;
        img.height -= 20;
    }
})

document.getElementById("delete").addEventListener("click",()=>{
    img.style.display = "none";
})

// Завдання 1:
document.addEventListener('DOMContentLoaded', function() {
    const variantNumber = 20;
    const elementNumber = (variantNumber % 10) + 4;
    
    console.log('Елемент номер:', elementNumber);
    
    let firstElementClicked = 1;
    let firstClick1 = true;
    let firstClick2 = true;
    
    document.addEventListener('click', function(event) {
        const allElements = document.body.getElementsByTagName('*');
        const clickedIndex = Array.from(allElements).indexOf(event.target) + 1;
        console.log(clickedIndex);
        
        if (clickedIndex === elementNumber) {
            // Перший клік - getElementById
            const btn = document.getElementById('k');
            btn.style.backgroundColor = btn.style.backgroundColor === 'green' ? '' : 'green';
            btn.style.color = 'white';
            if(firstClick1 === false ){
                btn.style.backgroundColor = 'darkblue';
                firstClick1 = true;
            }
            else
                firstClick1 = false;

            firstElementClicked++;
            
        
        }
        else if (clickedIndex === elementNumber + 1 && firstElementClicked % 2 === 0) {
            // Другий клік - querySelector
            const element = document.querySelector('li');
            element.style.backgroundColor = element.style.backgroundColor === 'darkblue' ? '' : 'darkblue';
            element.style.color = 'white';
            if(firstClick2 === false ){
                element.style.backgroundColor = 'green';
                firstClick2 = true;
            }
            else
             firstClick2 = false;
        }
    });

});
