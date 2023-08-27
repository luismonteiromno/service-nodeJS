const conection  = require("../database/data");

class servicesModels {
    execute_query(sql, params = "") {
        return new Promise((resolve, reject) => {
            conection.query(sql, params, (error, response) => {
                if (error){
                    reject(error);
                }
                resolve(response);
            })
        })
    }
    list() {
        const sql = "SELECT * FROM services";
        this.execute_query(sql);
    }

    create(newService) {
        const sql = "INSERT INTO services SET ?";
        this.execute_query(sql, newService);
    }

    update(updateService, id) {
        const sql = "UPDATE services SET ? WHERE id = ?";
        this.execute_query(sql, [updateService, id]);
    }

    delete(id) {
        const sql = "DELETE FROM services WHERE id = ?";
        this.execute_query(sql, id);
    }
}

module.exports = new servicesModels();
