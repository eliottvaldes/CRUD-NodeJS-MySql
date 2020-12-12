// --------------------------------------
// **************************************
//             IMPORTANTE 
// Primero que nada, holis uwu
// cambiar el usuario y la contraseña de la base de datos 
// comando para ejecutar la app es nodemon app.js
// **************************************
// --------------------------------------


//importar modulos requeridos e instalados previamente
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Conexion a la base de datos
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'crudnodevlef'
});

con.connect();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

//motor de plantillas  html ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
//se usa morgan para mostrar las peticiones del cliente a nuestro servidor. Muestra si es GET o POST
app.use(morgan('dev'));



//**************PELICULAS DE MARVEL*******************************
//ruta para mostrar todos los datos
app.get('/obtenerMarvel', (req, res) => {
    //obtiene la conexion en la que se puede generar un error o la conexion exitosa
    con.query('SELECT * FROM crudnodevlef.peliculasmarvel', (err, peliculasMarvel) => {
        if (err) {
            res.json(err);
        }
        res.render('peliculasMarvel', {
            data: peliculasMarvel
        });
    });
});

//ruta para agregar pelicula de marvel
app.post('/addmarvel', (req, res) => {
    //recibimos los datos del formulario de guardar pelicula de marvel  
    //Se usa un arreglo llamado data para indicar que variable dependiendo la posicion del arreglo se va a almacenar
    const data = req.body;
    //se usa el ? para evitar problemas con mysql injection        
    con.query('INSERT INTO crudnodevlef.peliculasmarvel set ?', [data], (err, peliculasMarvel) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerMarvel');

    });
});

//ruta para editar se pone :id para indicar que va a recibir ese parametro (se conoce como parametro de la ruta)
app.get('/updatemarvel/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM crudnodevlef.peliculasmarvel WHERE id = ?', [id], (err, peliculasMarvel) => {
        if (err) {
            res.json(err);
        }
        res.render('marvel_edit', {
            data: peliculasMarvel[0]
        });
    });
});

//ruta para editar se pone :id para indicar que va a recibir ese parametro (se conoce como parametro de la ruta)
app.post('/updatemarvel/:id', (req, res) => {
    const { id } = req.params;
    const newMarvel = req.body;
    con.query('UPDATE crudnodevlef.peliculasmarvel set ? WHERE id = ? ', [newMarvel, id], (err, peliculasMarvel) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerMarvel');
    });
});

//ruta para eliminar se pone :id para indicar que va a recibir ese parametro (se conoce como parametro de la ruta)
app.get('/deletemarvel/:id', (req, res) => {
    //desde request.params solo obtenemos la propiedad llamada id que se obtiene al pulsar el boton delete
    const { id } = req.params;
    con.query('DELETE FROM crudnodevlef.peliculasmarvel WHERE id = ?', [id], (err, peliculasMarvel) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerMarvel');
    });
});

//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//**************PELICULAS DE DC*******************************
//ruta para mostrar todos los datos
app.get('/obtenerDc', (req, res) => {
    con.query('SELECT * FROM crudnodevlef.peliculasdc', (err, peliculasDC) => {
        if (err) {
            res.json(err);
        }
        res.render('peliculasDC', {
            data: peliculasDC
        });
    });
});

app.post('/adddc', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO crudnodevlef.peliculasdc set ?', [data], (err, peliculasDC) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDc');

    });
});

app.get('/updatedc/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM crudnodevlef.peliculasdc WHERE id = ?', [id], (err, peliculasDC) => {
        if (err) {
            res.json(err);
        }
        res.render('dc_edit', {
            data: peliculasDC[0]
        });
    });
});

app.post('/updatedc/:id', (req, res) => {
    const { id } = req.params;
    const newDc = req.body;
    con.query('UPDATE crudnodevlef.peliculasdc set ? WHERE id = ? ', [newDc, id], (err, peliculasDC) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDc');
    });
});

app.get('/deletedc/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM crudnodevlef.peliculasdc WHERE id = ?', [id], (err, peliculasDC) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDc');
    });
});


//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//**************PELICULAS DE Disney*******************************
//ruta para mostrar todos los datos
app.get('/obtenerDisney', (req, res) => {
    con.query('SELECT * FROM crudnodevlef.peliculasdisney', (err, peliculasDisney) => {
        if (err) {
            res.json(err);
        }
        res.render('peliculasDisney', {
            data: peliculasDisney
        });
    });
});

app.post('/adddisney', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO crudnodevlef.peliculasdisney set ?', [data], (err, peliculasDisney) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDisney');

    });
});

app.get('/updatedisney/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM crudnodevlef.peliculasdisney WHERE id = ?', [id], (err, peliculasDisney) => {
        if (err) {
            res.json(err);
        }
        res.render('disney_edit', {
            data: peliculasDisney[0]
        });
    });
});

app.post('/updatedisney/:id', (req, res) => {
    const { id } = req.params;
    const newDc = req.body;
    con.query('UPDATE crudnodevlef.peliculasdisney set ? WHERE id = ? ', [newDc, id], (err, peliculasDisney) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDisney');
    });
});

app.get('/deletedisney/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM crudnodevlef.peliculasdisney WHERE id = ?', [id], (err, peliculasDisney) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDisney');
    });
});
























































































//Iniciar la aplicación en el puerto 8090
app.set('port', process.env.PORT || 8090);
app.listen(app.get('port'), function () {
    console.log("Servidor corriendo en puerto: " + app.get('port'));
});