'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            console.log('опа!');
            this.count45 = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = +prompt('На сколько оцените его?', '');
        
            if (a != null && b !== 0 && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('ok');
            } else {
                i--;
                console.log('not ok');
            }    
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов(');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Вы классический зритель');
        }
    },
    showMyDB: function() {
        if (this.privat == false) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую')
            if (genres === '' || genres == null ) {
                conslose.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                this.genres = genres.split(', ');
            }            
        }
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }    
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres();