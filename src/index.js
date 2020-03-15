import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Joseph_Conrad%2C_Fotografie_von_George_Charles_Beresford%2C_1904.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/1280px-J._K._Rowling_2010.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/NSRW_Charles_Dickens.png',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Shakespeare_Droeshout_1623.jpg/1920px-Shakespeare_Droeshout_1623.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

const state = {
    turnData: getTurnData(authors)
}

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
            author.books.some((title) =>
                title === answer))
    }
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
