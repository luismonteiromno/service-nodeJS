const conection  = require("../database/data");
class servicesModels {
    list() {
        const sql = "SELECT * FROM services";
        return new Promise((resolve, reject) => {
            conection.query(sql, {}, (error, response) => {
                if (error){
                    console.log(`Error ${error} na listagem`);
                    reject(error);
                }
                console.log("Sucesso");
                resolve(response);
            })
        })
    }

    create(newService) {
        const sql = "INSERT INTO services SET ?";
        return new Promise((resolve, reject) => {
            conection.query(sql, newService, (error, response) => {
                if (error){
                    console.log(`Error ${error} na criação`);
                    reject(error);
                }
                console.log("Sucesso");
                resolve(response);
            })
        })
    }

    update(updateService, id) {
        const sql = "UPDATE services SET ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            conection.query(sql, [updateService, id], (error, response) => {
                if (error){
                    console.log(`Error ${error} na atualização`);
                    reject(error);
                }
                console.log("Sucesso");
                resolve(response);
            })
        })
    }

    delete(id) {
        const sql = "DELETE FROM services WHERE id = ?";
        return new Promise((resolve, reject) => {
            conection.query(sql, id, (error, response) => {
                if (error){
                    console.log(`Error ${error} na hora de deletar`);
                    reject(error);
                }
                console.log("Sucesso");
                resolve(response);
            })
        })
    }
}

module.exports = new servicesModels();