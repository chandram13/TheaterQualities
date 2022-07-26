
const Regal = {
    movie: "My Movie",
    quality: "IMAX 3D",
    rating: "G, for everyone",
    year: 2022,
    seating: "reserved"
}

myMovie(Regal);

function myMovie({movie,quality,rating,year,seating}) {
    const movieCharacteristics = "Title" + movie + "Seen in:" + quality + "./n" + "The assigned rating is: " + rating + "year released in" + str(year) + "exclusively in" + Seating + "./n";
}

// nested objects in destructuring

const profitRegal = {
    movie: "My Movie",
    quality: "IMAX 3D",
    rating: "G, for everyone",
    Year: 2022,
    seating: "reserved",
    profit {
        seatsSold : 100,
        concessions : 800,
        showtimes : 4,
        employees : 32
    }
    myTheater(profitRegal,seating);

    function myTheater({movie,profit}: {concessions} }) {
    const movieData = movie + "has sold drinks and snacks in total of:" + concessions + "dollars."
}