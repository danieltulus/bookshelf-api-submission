const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: (request, h) => {
            return 'This is a book Page';
            Response.h (OK)
        },
    },
    {
        method: 'POST',
        path: '/books',
        handler: (request, h) => {
            return 'This is a POST Method for the book Page';
        },
    },
    {
        method: 'GET',
        path: '/books/{bookId?}',
        handler: (request, h) => {
            const { name = "not found" } = request.params;
            return `Book ID Number ${bookId}!`;
        },
    },
    {
        method: 'PUT',
        path: '/books/{bookId?}',
        handler: (request, h) => {
            const { name = "not found" } = request.params;
            return `Edit Book ID Number ${bookId}!`; 
        },
    },
    {
        method: 'DELETE',
        path: '/books/{bookId?}',
        handler: (request, h) => {
            const { name = "not found" } = request.params;
            return `Delete Book ID Number ${bookId}!`; 
        },
    },
]

module.exports = routes;