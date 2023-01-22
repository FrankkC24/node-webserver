
import http from 'http';


http.createServer( ( req, res ) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Context-Type': 'application/csv' });

    const person = {
        id: 1,
        name: 'FrankkC',
    };

    res.write( JSON.stringify( person ) );
    res.end();
})
.listen( 8080 );

console.log('Listening in the port 8080');