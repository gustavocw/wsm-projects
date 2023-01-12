import React from 'react'

const login = () => {
  return (
    
    <div>
      <div className="content-modal">

<h3>Cadastrar Aluno</h3>

<form >


<label htmlFor="nome_completo">Nome do Aluno</label>
<input type="text" name='nome_completo'/>

<label htmlFor="email">Email</label>
<input type="text" name='email'/>

<label htmlFor="nif">NIF</label>
<input type="text" name='nif'/>

<label htmlFor="CP">CP</label>
<input type="text" name='CP'/>

<label htmlFor="Matricula">Matrícula</label>
<input type="text" name='Matricula'/>

<label htmlFor="cidade">Cidade</label>
<input type="text" name='cidade'/>

<label htmlFor="rua">Rua</label>
<input type="text" name='rua'/>

<label htmlFor="complemento">Complemento</label>
<input type="text" name='complemento'/>

<label htmlFor="nascimento">Nascimento</label>
<input type="text" name='nascimento'/>

<label htmlFor="pai">Pai</label>
<input type="text" name='nome_pai'/>

<label htmlFor="mae">Mãe</label>
<input type="text" name='nome_mae'/>

<label htmlFor="entidade-de-conclusao">Ent. Conclusão</label>
<input type="text" name='email'/>

<label htmlFor="obs">Observações</label>
<input type="text" name='observacao'/>

</form>
</div>
<div className="btns">
<button className='saveModal'  >Salvar</button>
<button className='closeModal'  >Sair</button>
</div>
    </div>
  )
}

export default login