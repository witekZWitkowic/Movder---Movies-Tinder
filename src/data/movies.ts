export type Movie = {
    id: string,
    imageURL: string,
    title: string,
    summary: string,
    rating: number
}

export const movies: Movie[] = [
    {
        id: "inf123",
        imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        title: "Inferno",
        summary: "Lorem ipsum....",
        rating: 5.3
    },
    {
        id: "sht0000",
        imageURL: "https://m.media-amazon.com/images/M/MV5BNjY4NjM3MjQ2OF5BMl5BanBnXkFtZTcwOTc3NzYyMQ@@._V1_FMjpg_UX1000_.jpg",
        title: "SUPERBABIES: BABY GENIUSES 2",
        summary: "Lorem ipsum....",
        rating: 1.3
    },
    {
        id: "faf123",
        imageURL: "https://i.redd.it/aoqbvrk38xg41.jpg",
        title: "Fast & Furious: Math.random()*12873123",
        summary: "Lorem ipsum....",
        rating: 0.3
    },
    {
        id: "starwar77",
        imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        title: "Star Wars: Episode VII - The Force Awakens",
        summary: "Lorem ipsum....",
        rating: 8.2
    },
    {
        id: "vik2091",
        imageURL: "https://i.pinimg.com/originals/a5/09/53/a5095362f8dab0add0adb1715611765b.jpg",
        title: "Vikings",
        summary: "Lorem ipsum....",
        rating: 9.4
    },
    {
        id: "mando29",
        imageURL: "https://fwcdn.pl/fpo/31/97/813197/8054742_1.3.jpg",
        title: "Mandalorian",
        summary: "Lorem ipsum....",
        rating: 9.7
    },
];
export const getTinderMovies = async (): Promise<Movie[]> => {
    return new Promise((res) => {
        return res(movies);
    })
}