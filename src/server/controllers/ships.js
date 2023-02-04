import { db } from "../db.js"

export const getShips = (_, res) => {
    const q = "SELECT * FROM naviosdb";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const addShip = (req, res) => {
    const q = 
    "INSERT INTO naviosdb(`BANDEIRA`, `FAX`, `TELEFONE`, `TELEXT`, `tipo_embarcacao`, `nome_original`, `NOME_NAVIO`, `CONTA_ARMADOR`, `ARMADOR`, `OBS_NAVIO`, `EMAIL_NAVIO`) VALUES(?)";

    const values = [
        req.body.BANDEIRA,
        req.body.FAX,
        req.body.TELEFONE,
        req.body.TELEXT,
        req.body.tipo_embarcacao,
        req.body.nome_original,
        req.body.NOME_NAVIO,
        req.body.CONTA_ARMADOR,
        req.body.ARMADOR,
        req.body.OBS_NAVIO,
        req.body.EMAIL_NAVIO,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateShip = (req, res) => {
    const q = 
    "UPDATE ships SET `BANDEIRA` = ?, `FAX` = ?, `TELEFONE` = ?, `TELEX` = ?, `tipo_embarcacao` = ?, `nome_original` = ?, `NOME_NAVIO` = ?, `CONTA_ARMADOR` = ?, `ARMADOR` = ?, `OBS_NAVIO` = ?, `EMAIL_NAVIO` = ? WHERE `id` = ?";

    const values = [
        req.body.BANDEIRA,
        req.body.FAX,
        req.body.TELEFONE,
        req.body.TELEXT,
        req.body.tipo_embarcacao,
        req.body.nome_original,
        req.body.NOME_NAVIO,
        req.body.CONTA_ARMADOR,
        req.body.ARMADOR,
        req.body.OBS_NAVIO,
        req.body.EMAIL_NAVIO,
    ];

    db.query(q, [...values, req.params.CONTADOR], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};


export const deleteShip = (req, res) => {
    const q = "DELETE FROM ships WHERE `CONTADOR` = ?";

    db.query(q, [req.params.CONTADOR], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
}

