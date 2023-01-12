import { db } from "../db.js"

export const getAlunos = (_, res) => {
    const q = "SELECT * FROM alunos";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};

export const addAluno = (req, res) => {
    const q = 
    "INSERT INTO alunos(`nome_completo`, `email`, `nif`, `cp`, `matricula`, `cidade`, `rua`, `complemento`, `nascimento`, `nome_pai`, `nome_mae`, `entidade_de_conclusao`, `observacao`) VALUES(?)";

    const values = [
        req.body.nome_completo,
        req.body.email,
        req.body.nif,
        req.body.cp,
        req.body.matricula,
        req.body.cidade,
        req.body.rua,
        req.body.complemento,
        req.body.nascimento,
        req.body.nome_pai,
        req.body.nome_mae,
        req.body.entidade_de_conclusao,
        req.body.observacao,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateAluno = (req, res) => {
    const q = 
    "UPDATE alunos SET `nome_completo` = ?, `email` = ?, `nif` = ?, `cp` = ?, `matricula` = ?, `cidade` = ?, `rua` = ?, `complemento` = ?, `nascimento` = ?, `nome_pai` = ?, `nome_mae` = ?, `entidade_de_conclusao` = ?, `observacao` = ? WHERE `id` = ?";

    const values = [
        req.body.nome_completo,
        req.body.email,
        req.body.nif,
        req.body.cp,
        req.body.matricula,
        req.body.cidade,
        req.body.rua,
        req.body.complemento,
        req.body.nascimento,
        req.body.nome_pai,
        req.body.nome_mae,
        req.body.entidade_de_conclusao,
        req.body.observacao
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};


export const deleteAluno = (req, res) => {
    const q = "DELETE FROM alunos WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
}

