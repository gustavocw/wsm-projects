import { db } from "../db.js"

export const getProfessores = (_, res) => {
    const q = "SELECT * FROM professores";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const addProfessores = (req, res) => {
    const q = 
    "INSERT INTO professores(`nome_completo`, `email`, `nif`, `nascimento`, `cp`, `endereco`, `horas_trabalhadas`, `pagamento`, `conta`) VALUES(?)";

    const values = [
        req.body.nome_completo,
        req.body.email,
        req.body.nif,
        req.body.nascimento,
        req.body.cp,
        req.body.endereco,
        req.body.horas_trabalhadas,
        req.body.pagamento,
        req.body.conta,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateProfessores = (req, res) => {
    const q = 
    "UPDATE professores SET `nome_completo` = ?, `email` = ?, `nif` = ?, `cp` = ?, `matricula` = ?, `cidade` = ?, `rua` = ?, `complemento` = ?, `nascimento` = ?, `nome_pai` = ?, `nome_mae` = ?, `entidade_de_conclusao` = ?, `observacao` = ? WHERE `id` = ?";

    const values = [
        req.body.nome_completo,
        req.body.email,
        req.body.nif,
        req.body.nascimento,
        req.body.cp,
        req.body.endereco,
        req.body.horas_trabalhadas,
        req.body.pagamento,
        req.body.conta,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};


export const deleteProfessores = (req, res) => {
    const q = "DELETE FROM Professores WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
}