class Tables {
    init(conection) {
        this.conection = conection;
        this.createTableServices;
    }

    createTableServices() {
        const sql = `
            CREATE TABLE IF NOT EXISTS services (
                id NOT NULL AUTO_INCREMENT PRIMARY KEY,
                DATA BASE,
                servico varchar(100),
                cliente varchar(100),
                STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
            );
        `;
        this.conection.query(sql, (error) => {
            if(error) {
                console.log("Erro na hora de criar a tabela 'services'");
                console.log(error.message());
                return;
            }
            console.log("Tabela criada com sucesso");
        })
    }
}

module.exports = Tables;
