import db from "../config/db.js";

//menampilkan data
export const getUsers = (req, ress) => {
    //mysql : select *  from users
    db.query("SELECT * FROM users", (err,results) => {
        //jika ada error
        if(err){
            return ress.status(500).json({ message: err });
        }

        //jika tidak ada error
        ress.json(results);
    });
};

//insert data
//saya ingin menyimpan data ketabel users
//sql: INSERT INTO users (name, email, password) value()
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?,?)",
        (name, email, password),
        (err, result) => {
            // cek apakah ada error
            if (err) {
                return res.status(500).json({ mesagge: err });
            }

            //jika tidak ada error
            res.json({
                id: results.insertid,
                name: name,
                email: email,
            });
        }
    );
};

//show data
//menampilkan data yg id nya adalah 4
//sql? SELECT * FROM users WHERE id=4
export const getUsersByid = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id = ?",
        (id),
        (err,results) =>{
            //jika ada error
            if(err) {
                return res.status(500).json({ message: err });
            }

            res.json(results[0]);
        });
};

//update data
//saya ingin mengupdate data users dengan id=6
//sql? UPDATE users SET name=?, email=?, password=? WHERE id=6
export const updateUser = (req, res) => {
    const {id} = req.params;
    const { name, email } = req.boddy;

    db.query("UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, id],
        (err, results) => {
            // jika ada error
            if (err) {
                return res.status(500).json({ message: err });
            }

            //jika tidak ada error
            res.json({ message: 'User berhasil diupdate' });
        }
    );
};

//delete data
export const deleteUser = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
        //jika ada error
        if (err) {
            return res.status(500).json({ message: err });
        }

        //jika tidak ada error
        res.json({ message: 'User Berhasil dihapus' });
    });
};