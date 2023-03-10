function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time
        }
    }

    let numberOfSongs = input.shift();
    let typeOfSongs = input.pop();

    let songs = [];
    for (const song of input) {
        let [typeList, name, time] = song.split('_');
        songs.push(new Song(typeList, name, time));
    }
    
    if (typeOfSongs === 'all') {
        songs.forEach(x => console.log(x.name))
    }
    else {
        let filtered = songs.filter(x => x.typeList === typeOfSongs);
        filtered.forEach(x => console.log(x.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);