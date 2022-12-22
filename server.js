const Hapi = require('@hapi/hapi');

const init = async ( ) => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`This server runs smoothly on ${server.info.uri}`);
};

init();