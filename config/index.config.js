const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'di8149',
    database: 'consulta',
    port: '5432'
});

const getEstabelecimento = async (req, res) => {
  const response = await pool.query('SELECT  *FROM estabelecimento' );
  res.status(200).json(response.rows);
}

const getEstabelecimentoById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM estabelecimento WHERE id = $1', [id]);
    res.json(response.rows);
}

const createEstabelecimento = async (req, res) => {
    const { cnpj, razao_social, nome_fantasia } = req.body;
    
  const response = await pool.query('INSERT INTO estabelecimento (cnpj, razao_social, nome_fantasia) VALUES ($1, $2, $3)', [cnpj, razao_social, nome_fantasia]);
  console.log(response);
  res.json({
      message: 'Estabelecimento adicionado com sucesso',
      body: {
          user: {cnpj, razao_social, nome_fantasia}
      }
        
  })
};

const updateEstabelecimento = async (req, res) => {
    const id = req.params.id;
    const { cnpj, razao_social, nome_fantasia } = req.body;    
    const response = await pool.query('UPDATE estabelecimento SET cnpj=$1, razao_social=$2, nome_fantasia=$3,  WHERE cod_estabelecimento=$4',[
        cnpj,
        razao_social, 
        nome_fantasia
    ]);
    console.log(response);
    res.json('Estabelecimento alterado com sucesso!!!');
};

const deleteEstabelecimento = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM estabelecimento WHERE id = $1' , [id]);
    console.log(response);
    res.json(`Estabelecimento  ${id} deletado com sucesso`);
}; 

module.exports = {
    getEstabelecimento,
    getEstabelecimentoById,
    createEstabelecimento,
    deleteEstabelecimento,
    updateEstabelecimento
}