const db = require("../db/index");

const bandasController = {
    index: function(req, res) {
        let datos = db.lista;
        return res.render("listadoBandas", {datos:datos});
    },

    show: function(req, res) {
        const id = req.params.id;
        let bandaEncontrada = null;

        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].id == id) {
                bandaEncontrada = db.lista[i];
                break;
            }
        }   

        if (!bandaEncontrada) {
            return res.send("Banda no encontrada");
        }

        return res.render("detalleBanda", { banda: bandaEncontrada });
    },

    porGenero: function(req, res) {
        const genero = req.params.genero;
        const bandasEncontradas = [];
    
        for (let i = 0; i < db.lista.length; i++) {
            if (db.lista[i].genero.toLowerCase() === genero.toLowerCase()) {
                bandasEncontradas.push(db.lista[i]);
            }
        }
    
        if (bandasEncontradas.length === 0) {
            return res.send(`No se encontraron bandas para el género "${genero}"`);
        }
        else{
            return res.render("porGenero", { genero: genero, bandas: bandasEncontradas });
        }
}
    


};

module.exports = bandasController;
