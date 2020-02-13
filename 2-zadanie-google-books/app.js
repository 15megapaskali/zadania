/*------------------------------------------
Na stronie masz prosty formularz
Po jego wysłaniu zrób zapytanie na adres

https://www.googleapis.com/books/v1/volumes?q=XXX

gdzie XXX to tytuł wpisany w formularz.
Zamiast wpisywać to XXX w adres, spróbuj użyć właściwości data
$.ajax.

W odpowiedzi wypisz w konsoli tytuły książek.
------------------------------------------
*/
$(function () {

    const $bookList = $( '.list' );
    function insertContent(books) {
        console.log(books);
        for (const el of books) {
            const $li = $(`
                <li>
                    <h3>${el.title}</h3>
                    <p>${el.authors}</p> 
                </li>
                `);
            $bookList.append($li);
        }
    }


    $('button').click(function (el) {
        el.preventDefault();

        const $data = $('#search').val();

        $.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + $data,

        }).done(function (res) {
            console.log(res);
            for (const el of res.items){
                console.log(el.volumeInfo.title, el.volumeInfo.authors);
                const $li = $(`
                <li>
                    <h3>${el.volumeInfo.title}</h3>
                    <p>${el.volumeInfo.authors}</p> 
                </li>
                `);
                $bookList.append($li);
            }

        })
    })

});