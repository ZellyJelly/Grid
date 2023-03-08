let columns = 1;
let blocks = 1;
let userChoice;



buildGrid();

async function buildGrid(){

    userChoice = await userQuestion();
    await createColumns(userChoice);
    await createBlocks(userChoice);
}


function userQuestion(choice){

    choice = prompt("How big would you like your grid?"); 
    return choice;
}

function createColumns(choice)
{
    let max = choice; 
    gridContainer = document.querySelector('.gridContainer') 

    for (let i = 1; i < choice; i++){
        const div = document.createElement('div');
        div.dataset.container = `${i}`;
        gridContainer.appendChild(div);
        columns++
    }
}

function createBlocks(choice)
{
    let currentColumn = 0;

    for(let i = 0; i < choice; i++){
        gridCurrentContainer = document.querySelector(`[data-container="${currentColumn}"`)
        currentColumn++
        for(let i = 0; i < choice; i++){
            const div = document.createElement('div');
            div.dataset.blocks = `${i}`;
            gridCurrentContainer.appendChild(div);

        }
    }
}