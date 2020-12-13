
// --------------------------------------
// **************************************
//             IMPORTANTE 
// Primero que nada, holis uwu
// dentro de la carpeta 'database' se encuentra el archivo .sql para importar la base de datos
// se debe cambiar el usuario y la contraseña de la base de datos 
// POR ULTIMO UwU
// el comando para ejecutar la app es nodemon src/app.js
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
//**************PELICULAS DE DISNEY*******************************
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
    const newDisney = req.body;
    con.query('UPDATE crudnodevlef.peliculasdisney set ? WHERE id = ? ', [newDisney, id], (err, peliculasDisney) => {
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

//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//**************PELICULAS DE dreamworks*******************************
//ruta para mostrar todos los datos
app.get('/obtenerDreamworks', (req, res) => {
    con.query('SELECT * FROM crudnodevlef.peliculasdreamworks', (err, peliculasdreamworks) => {
        if (err) {
            res.json(err);
        }
        res.render('peliculasDreamworks', {
            data: peliculasdreamworks
        });
    });
});
app.post('/adddreamworks', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO crudnodevlef.peliculasdreamworks set ?', [data], (err, peliculasdreamworks) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDreamworks');
    });
});
app.get('/updatedreamworks/:id', (req, res) => {
    const { id } = req.params;
    con.query('SELECT * FROM crudnodevlef.peliculasdreamworks WHERE id = ?', [id], (err, peliculasdreamworks) => {
        if (err) {
            res.json(err);
        }
        res.render('dreamworks_edit', {
            data: peliculasdreamworks[0]
        });
    });
});
app.post('/updatedreamworks/:id', (req, res) => {
    const { id } = req.params;
    const newdreamworks = req.body;
    con.query('UPDATE crudnodevlef.peliculasdreamworks set ? WHERE id = ? ', [newdreamworks, id], (err, peliculasdreamworks) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDreamworks');
    });
});
app.get('/deletedreamworks/:id', (req, res) => {
    const { id } = req.params;
    con.query('DELETE FROM crudnodevlef.peliculasdreamworks WHERE id = ?', [id], (err, peliculasdreamworks) => {
        if (err) {
            res.json(err);
        }
        res.redirect('/obtenerDreamworks');
    });
});


//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//**************MENSAJE CIFRADO*******************************
//ruta para mostrar todos los datos
app.get('/obtenerSecreto', (req, res) => {
    con.query('SELECT name_user, msg, pass FROM crudnodevlef.secretmsg', (err, secret) => {
        if (err) {
            res.json(err);
        }
        res.render('mensajeSecreto', {
            data: secret
        });
    });
});
app.post('/addmsg', (req, res) => {
    const data = req.body;    
    let name_user = data.name;
    let msg = data.msg;
    let pass = data.password2;
    console.log("Pass1: " + data.password1 + "\nPass2: " + data.password2);

    if(data.password1.length==8 || data.password1.length==16){
        if(data.password1 != data.password2){
            res.redirect('/obtenerSecreto');
        }else{
            con.query('INSERT INTO crudnodevlef.secretmsg values ("'+name_user+'", AES_ENCRYPT("'+msg+'","'+pass+'"),"'+pass+'")', (err, secret) => {
                if (err) {
                    res.json(err);
                }
                res.redirect('/obtenerSecreto');
            });    
        }
    }else{
        res.redirect('/obtenerSecreto');
    }
    
});


//-------------------------------------------------------------------------------------------------------
// CONSULTAS
//Consutlar todas
app.get('/obtenerTodas', (req, res) => {
    con.query('SELECT "Marvel" as Franquicia, name_movie, main_character, duration, rating FROM peliculasmarvel UNION SELECT "DC Comics", name_movie, main_character, duration, rating FROM peliculasdc UNION SELECT "Disney", name_movie, main_character, duration, rating FROM peliculasdisney UNION SELECT "DreamWorks", name_movie, main_character, duration, rating FROM peliculasdreamworks ORDER BY Franquicia ASC',
    (err, all) => {
        if (err) {
            res.json(err);
        }
        res.render('c1', {
            data: all
        });
    });
});

//por rating
app.get('/obtenerRating', (req, res) => {
    con.query('SELECT "Marvel" as Franquicia, name_movie, rating FROM peliculasmarvel UNION SELECT "DC Comics", name_movie, rating FROM peliculasdc UNION SELECT "Disney", name_movie, rating FROM peliculasdisney UNION SELECT "DreamWorks", name_movie, rating FROM peliculasdreamworks ORDER BY rating DESC',
    (err, all) => {
        if (err) {
            res.json(err);
        }
        res.render('c2', {
            data: all
        });
    });
});

// por duración
app.get('/obtenerDuracion', (req, res) => {
    con.query('SELECT "Marvel" as Franquicia, name_movie, duration FROM peliculasmarvel UNION SELECT "DC Comics", name_movie, duration FROM peliculasdc UNION SELECT "Disney", name_movie, duration FROM peliculasdisney UNION SELECT "DreamWorks", name_movie, duration FROM peliculasdreamworks ORDER BY duration DESC',
    (err, all) => {
        if (err) {
            res.json(err);
        }
        res.render('c3', {
            data: all
        });
    });
});

//por nombre
app.get('/obtenerNombre', (req, res) => {
    con.query('SELECT "Marvel" as Franquicia, name_movie FROM peliculasmarvel UNION SELECT "DC Comics", name_movie FROM peliculasdc UNION SELECT "Disney", name_movie FROM peliculasdisney UNION SELECT "DreamWorks", name_movie FROM peliculasdreamworks ORDER BY name_movie ASC',
    (err, all) => {
        if (err) {
            res.json(err);
        }
        res.render('c4', {
            data: all
        });
    });
});

//por pritagonista
app.get('/obtenerProtagonista', (req, res) => {
    con.query('SELECT name_movie, main_character FROM peliculasmarvel UNION SELECT  name_movie, main_character FROM peliculasdc UNION SELECT  name_movie, main_character FROM peliculasdisney UNION SELECT  name_movie, main_character FROM peliculasdreamworks ORDER BY main_character ASC',
    (err, all) => {
        if (err) {
            res.json(err);
        }
        res.render('c5', {
            data: all
        });
    });
});

//dirigir al formulario para poder hacer la consulta
app.get('/dataCifrado',(req, res)=>{
    res.render('c6');
});
// descifrar mensaje
app.post('/obtenerCifrado', (req, res) => {
    const data = req.body;    
    let name_user = data.name;
    let msg = data.msg;
    let pass = data.password2;
    console.log("Pass1: " + data.password1 + "\nPass2: " + data.password2);

    if(data.password1 != data.password2){
        res.render('c6');
    }else{                    
        con.query('SELECT name_user, AES_DECRYPT(msg,"'+pass+'") AS msg, pass FROM crudnodevlef.secretmsg WHERE name_user= "'+name_user+'" AND pass = "'+pass+'"  ',
        (err, descifrado) => {
            if (err) {
                res.json(err);
            }
            res.render('c6_2', {
                data: descifrado
            });
        });
    }
    
});


//******************************************************************************/
//******************************************************************************/
//******************************************************************************/

//Iniciar la aplicación en el puerto 8090
app.set('port', process.env.PORT || 8090);
app.listen(app.get('port'), function () {
    console.log("Servidor corriendo en puerto: " + app.get('port'));
});