const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player));
};

const showPlayerDetails = (players) => {
    console.log(players);
    for (const player of players) {
        const parent = document.getElementById("player-container");

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card border">
            <div class="pro-pic">
                <img class="w-25" src="${player.strThumb}" alt="">
            </div>
            <h2>Name: ${player.strPlayer}</h2>
            <h5>Country: ${player.strNationality}</h5>
            <p></p>
            <div class="allbutton">
                <div class="btn btn-danger">Delete</div>
                <div class="btn btn-success">Details</div>
            </div>
        </div>
    `;
        parent.appendChild(div);
    }
};