const { Pool } = require('pg');

const pool = new Pool({
    host: '192.168.250.41',
    user: 'postgres',
    password: 'postgres',
    database: 'smartvale_homologation',
    port: '5432'
});

const gettransacao = async (req, res) => {
  const response = await pool.query('SELECT  *FROM transacao' );
  res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const { nome, sobrenome, email } = req.body;
    
  const response = await pool.query('INSERT INTO users (nome, sobrenome, email) VALUES ($1, $2, $3)', [nome, sobrenome, email]);
  console.log(response);
  res.json({
      message: 'Usuário adicionado com sucesso',
      body: {
          user: {nome, sobrenome,email}
      }
        
  })
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { nome, sobrenome, email } = req.body;    
    const response = await pool.query('UPDATE users SET nome = $1, email = $2 WHERE id = $3', [
        nome,
        email,
        id
    ]);
    console.log(response);
    res.json('Usuário alterado com sucesso!!!');
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1' , [id]);
    console.log(response);
    res.json(`Usário ${id} deletado com sucesso`);
}; 

module.exports = {
    gettransacao,
    getUserById,
    createUser,
    deleteUser,
    updateUser

}