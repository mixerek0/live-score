function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playersStats() {
    const team1name = document.getElementsByClassName('team1-info-name');
    const team2name = document.getElementsByClassName('team2-info-name');
    const mapImage = document.getElementsByClassName('mapImg');
    const mapName = document.getElementsByClassName('mapName');
    const serverImage = document.getElementsByClassName('serverImg');
    const serverName = document.getElementsByClassName('serverName');
    const score = document.getElementsByClassName('match-score');
    const defaultImg = "https://i.imgur.com/n9yZwXP.jpg"
    const player1 = document.getElementsByClassName('player1-nick');
    const player2 = document.getElementsByClassName('player2-nick');
    const player3 = document.getElementsByClassName('player3-nick');
    const player4 = document.getElementsByClassName('player4-nick');
    const player5 = document.getElementsByClassName('player5-nick');
    const player6 = document.getElementsByClassName('player6-nick');
    const player7 = document.getElementsByClassName('player7-nick');
    const player8 = document.getElementsByClassName('player8-nick');
    const player9 = document.getElementsByClassName('player9-nick');
    const player10 = document.getElementsByClassName('player10-nick');

    const player1img = document.getElementsByClassName('player1-img');
    const player2img = document.getElementsByClassName('player2-img');
    const player3img = document.getElementsByClassName('player3-img');
    const player4img = document.getElementsByClassName('player4-img');
    const player5img = document.getElementsByClassName('player5-img');
    const player6img = document.getElementsByClassName('player6-img');
    const player7img = document.getElementsByClassName('player7-img');
    const player8img = document.getElementsByClassName('player8-img');
    const player9img = document.getElementsByClassName('player9-img');
    const player10img = document.getElementsByClassName('player10-img');


    fetch('https://open.faceit.com/data/v4/hubs/18d8cc72-e76a-43f0-bbd3-ca7cf48a6115/matches?type=ongoing&offset=0&limit=20',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 9a2b4ca1-ff83-4b80-be68-524433ed779e'
          }
    })
    .then((response) => response.json())
    .then(async(responseData) => {
        
        // clone match div to quantity of matches 
        for(let i = 0; i < responseData.items.length - 1; i++) {
            let clone = document.getElementsByClassName('match-list')[0].cloneNode(true);
            document.getElementsByClassName('match-list')[0].parentNode.appendChild(clone);
        }

        console.log(responseData);
        // calculate avg elo of teams 
        
        // const team1Array = new Array(5);
        // const team2Array = new Array(5);
        // for (let i = 0; i < responseData.items.length; i++) {
        //     team1Array[i] = new Array(5);
        //     team2Array[i] = new Array(5);
        //     for (let j = 0; j < 5; j++) {
        //         team1Array[i][j] = responseData.items[i].teams.faction1.roster[j].player_id;
        //         team2Array[i][j] = responseData.items[i].teams.faction2.roster[j].player_id;
        //     }
        // }

        // // get players elo from team1array and team2array 
        // const team1elo = new Array(5);
        // const team2elo = new Array(5);
        // for (let i = 0; i < responseData.items.length; i++) {
        //     team1elo[i] = new Array(5);
        //     team2elo[i] = new Array(5);
        //     for (let j = 0; j < 5; j++) {
        //         team1elo[i][j] = await fetch(`https://open.faceit.com/data/v4/players/${team1Array[i][j]}`,{
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': 'Bearer 9a2b4ca1-ff83-4b80-be68-524433ed779e'
        //             }
        //         })
        //         .then((response) => response.json())
        //         .then((responseData) => {
        //             return responseData.games.csgo.faceit_elo;
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        //         team2elo[i][j] = await fetch(`https://open.faceit.com/data/v4/players/${team2Array[i][j]}`,{
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': 'Bearer 9a2b4ca1-ff83-4b80-be68-524433ed779e'
        //             }
        //         })
        //         .then((response) => response.json())
        //         .then((responseData) => {
        //             return responseData.games.csgo.faceit_elo ;
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //         });
        //     }
        // }

        // console.log(team1elo, team2elo);




        // player avatars
        await sleep(1500);
        for(let i = 0; i < responseData.items.length; i++) {
            
            if(responseData.items[i].teams.faction1.roster[0].avatar == "") {
                player1img[i].src = defaultImg;
            } else {
                player1img[i].src = responseData.items[i].teams.faction1.roster[0].avatar;
            } if(responseData.items[i].teams.faction1.roster[1].avatar == "") {
                player2img[i].src = defaultImg;
            } else {
                player2img[i].src = responseData.items[i].teams.faction1.roster[1].avatar;
            } if(responseData.items[i].teams.faction1.roster[2].avatar == "") {
                player3img[i].src = '';
            } else {
                player3img[i].src = responseData.items[i].teams.faction1.roster[2].avatar;
            } if(responseData.items[i].teams.faction1.roster[3].avatar == "") {
                player4img[i].src = defaultImg;
            } else {
                player4img[i].src = responseData.items[i].teams.faction1.roster[3].avatar;
            } if(responseData.items[i].teams.faction1.roster[4].avatar == "") {
                player5img[i].src = defaultImg;
            } else {
                player5img[i].src = responseData.items[i].teams.faction1.roster[4].avatar;
            } if(responseData.items[i].teams.faction2.roster[0].avatar == "") { 
                player6img[i].src = defaultImg;
            } else {
                player6img[i].src = responseData.items[i].teams.faction2.roster[0].avatar;
            } if(responseData.items[i].teams.faction2.roster[1].avatar == "") {
                player7img[i].src = defaultImg;
            } else {
                player7img[i].src = responseData.items[i].teams.faction2.roster[1].avatar;
            } if(responseData.items[i].teams.faction2.roster[2].avatar == "") {
                player8img[i].src = defaultImg;
            } else {
                player8img[i].src = responseData.items[i].teams.faction2.roster[2].avatar;
            } if(responseData.items[i].teams.faction2.roster[3].avatar == "") {
                player9img[i].src = defaultImg;
            } else {
                player9img[i].src = responseData.items[i].teams.faction2.roster[3].avatar;
            } if(responseData.items[i].teams.faction2.roster[4].avatar == "") {
                player10img[i].src = defaultImg;
            } else {
                player10img[i].src = responseData.items[i].teams.faction2.roster[4].avatar;
            }



        }

    
        // player nicknames
        for(let i = 0; i < responseData.items.length; i++) {
            player1[i].innerHTML = responseData.items[i].teams.faction1.roster[0].nickname;
            player2[i].innerHTML = responseData.items[i].teams.faction1.roster[1].nickname;
            player3[i].innerHTML = responseData.items[i].teams.faction1.roster[2].nickname;
            player4[i].innerHTML = responseData.items[i].teams.faction1.roster[3].nickname;
            player5[i].innerHTML = responseData.items[i].teams.faction1.roster[4].nickname;
            player6[i].innerHTML = responseData.items[i].teams.faction2.roster[0].nickname;
            player7[i].innerHTML = responseData.items[i].teams.faction2.roster[1].nickname;
            player8[i].innerHTML = responseData.items[i].teams.faction2.roster[2].nickname;
            player9[i].innerHTML = responseData.items[i].teams.faction2.roster[3].nickname;
            player10[i].innerHTML = responseData.items[i].teams.faction2.roster[4].nickname;
        }


        //match details
    await sleep(1000);
    for(let i = 0; i < responseData.items.length; i++) {

        if(responseData.items[i].status == "READY"){
            score[i].innerHTML = "Oczekiwanie na dołączenie graczy";
            mapName[i].innerHTML = responseData.items[i].voting.map.pick;
            serverName[i].innerHTML = responseData.items[i].voting.location.pick;
            if(responseData.items[i].voting.map.pick == 'de_overpass') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7654d0b5-bc0e-41bd-a59d-4ffa67da9a92_1589193763922.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_nuke') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/ae5d92c0-2aee-45e3-9a53-396fa0b103f7_1589578446264.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_mirage') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/30358226-693b-4b9d-9da9-afd1d5f1753e_1589193685453.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_dust2') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0a916112-ed82-4b25-b79d-33bc1b137e7d_1589575275416.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_cache') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b225072-f5ed-4865-80cb-dafdcf9ed799_1589578257857.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_ancient') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/gams/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7e1736a3-8ea9-4e2b-9bfc-2b0c97105823_1607106278884.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_vertigo') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b16dd4c-fc45-4b39-8488-62d362545a4a_1594388355393.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_inferno') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/007bc454-3d90-4e47-8ba6-a567e07741f0_1589193843230.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_train') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/15f99292-8172-42e8-ac7e-45f9e800e8bb_1589193814491.jpeg';
            }
        if(responseData.items[i].voting.location.pick == 'Germany') {
            serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/de_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'Poland') {
            serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/pl_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'France') {
            serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/fr_110x55.jpg';
        } 
        } else if(responseData.items[i].status === undefined){
            score[i].innerHTML = "Runda Nożowa";
        } else if(responseData.items[i].voting === undefined){
            score[i].innerHTML = "Pickowanie Graczy lub Mapy";
        } else if(responseData.items[i].results === undefined && responseData.items[i].results === undefined){
            score[i].innerHTML = "0 - 0";
            mapName[i].innerHTML = responseData.items[i].voting.map.pick;
            serverName[i].innerHTML = responseData.items[i].voting.location.pick;
            if(responseData.items[i].voting.map.pick == 'de_overpass') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7654d0b5-bc0e-41bd-a59d-4ffa67da9a92_1589193763922.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_nuke') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/ae5d92c0-2aee-45e3-9a53-396fa0b103f7_1589578446264.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_mirage') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/30358226-693b-4b9d-9da9-afd1d5f1753e_1589193685453.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_dust2') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0a916112-ed82-4b25-b79d-33bc1b137e7d_1589575275416.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_cache') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b225072-f5ed-4865-80cb-dafdcf9ed799_1589578257857.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_ancient') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7e1736a3-8ea9-4e2b-9bfc-2b0c97105823_1607106278884.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_vertigo') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b16dd4c-fc45-4b39-8488-62d362545a4a_1594388355393.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_inferno') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/007bc454-3d90-4e47-8ba6-a567e07741f0_1589193843230.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_train') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/15f99292-8172-42e8-ac7e-45f9e800e8bb_1589193814491.jpeg';
            }
            if(responseData.items[i].voting.location.pick == 'Germany') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/de_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'Poland') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/pl_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'France') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/fr_110x55.jpg';
            } 
        } else if(responseData.items[i].status == "ONGOING"){
            score[i].innerHTML = responseData.items[i].results.score.faction1 + " - " + responseData.items[i].results.score.faction2;
            mapName[i].innerHTML = responseData.items[i].voting.map.pick;
            serverName[i].innerHTML = responseData.items[i].voting.location.pick;
            if(responseData.items[i].voting.map.pick == 'de_overpass') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7654d0b5-bc0e-41bd-a59d-4ffa67da9a92_1589193763922.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_nuke') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/ae5d92c0-2aee-45e3-9a53-396fa0b103f7_1589578446264.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_mirage') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/30358226-693b-4b9d-9da9-afd1d5f1753e_1589193685453.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_dust2') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0a916112-ed82-4b25-b79d-33bc1b137e7d_1589575275416.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_cache') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b225072-f5ed-4865-80cb-dafdcf9ed799_1589578257857.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_ancient') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/7e1736a3-8ea9-4e2b-9bfc-2b0c97105823_1607106278884.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_vertigo') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/0b16dd4c-fc45-4b39-8488-62d362545a4a_1594388355393.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_inferno') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/007bc454-3d90-4e47-8ba6-a567e07741f0_1589193843230.jpeg';
            } else if(responseData.items[i].voting.map.pick == 'de_train') {
                mapImage[i].src = 'https://assets.faceit-cdn.net/third_party/games/4f899245-2fa8-4e52-ad9a-4a363613c19e/assets/votables/15f99292-8172-42e8-ac7e-45f9e800e8bb_1589193814491.jpeg';
            }
            if(responseData.items[i].voting.location.pick == 'Germany') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/de_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'Poland') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/pl_110x55.jpg';
            } else if(responseData.items[i].voting.location.pick == 'France') {
                serverImage[i].src = 'https://cdn.faceit.com/games/votables/countries/fr_110x55.jpg';
            } 
        } else if(responseData.items[i].status == "CONFIGURING") {
            score[i].innerHTML = "Banowanie map";
        } 

        // team names
        team1name[i].innerHTML = responseData.items[i].teams.faction1.name;
        team2name[i].innerHTML = responseData.items[i].teams.faction2.name;

    }

        const loader = document.querySelector('.loader');
        loader.classList.add('disappear');



    })

}
playersStats()
