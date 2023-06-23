const pool = require("./conexion");

const getPosts = async () => {
    try {
      const { rows } = await pool.query("SELECT * FROM posts");
      return rows;
    } catch (err) {
      console.error(err);
    }
};

const agregarPost = async (post) => {
    try {
        const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0) RETURNING *"
        const values = Object.values(post);
        const { rows } = await pool.query(consulta, values);
        return rows[0];
    } catch(err) {
      console.error(err);
    }
};

const likePost = async (id) => {
    try {
      const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1"
      const values = [id]
      const { rows } = await pool.query(consulta, values);
      return rows;
    } catch(err) {
      console.error(err);
    }
};

const deletePost = async (id) => {
    try {
      const { rows } = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
      return rows;
    } catch (err) {
      console.error(err);
    }
};

module.exports = { getPosts, agregarPost, likePost, deletePost };
