// JS - CAMPOMINATO GRID

// Prendo la griglia dal HTML ed assegno una variabile
const gridContainer = document.querySelector('.grid-container');

// Assegno anche il play button
const playBtn = document.querySelector('button')


//Quando clicco il play button partirà il ciclo
playBtn.addEventListener('click', function(){

    //Il ciclo va da 1 a 100 (incluso) e si incrementa di un man mano
    for (let i = 1; i <= 100; i++) {

        //Creo un elemento div e lo nomino cell
        const cell = document.createElement('div');

        //Assegno a cell la classe cell (vedi CSS) (così prende le sembianze di un quadrato)
        cell.classList.add('cell');

        //Metto l'indice (NB:che man mano si incrementa) nella cella, così da creare 100 celle quadrate
        cell.innerHTML = i;

        //Appendo la cella nella griglia
        gridContainer.append(cell);
    
        /* Al click della cella si deve:
            1)stampare l'elemento in console
            2)aggiungere all'elemento cliccato la classe active (vedi CSS) 
            3)stampare il contenuto dell'elemento in console
        */
            
        cell.addEventListener('click', function () {
            //1)
            console.log(this);
            
            //2)
            this.classList.toggle('active');
    
            //3)
            console.log(this.innerHTML);
        });
    }
})