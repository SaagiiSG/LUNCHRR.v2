import mysql from 'mysql2'

const con = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Tuguldur_99',
    database:'lunchrr_v2'
}).promise()
export async function Test_h() {
    const [res] = await con.query("select * from test")
    return res
}
export async function a_name(name,username,card_id,phone){
        await con.query(`insert into test(name,username,card_id,phone) values('${name}','${username}','${card_id}','${phone}')`)
}
export async function d_name(ids) {
    if (!Array.isArray(ids) || ids.length === 0) {
      throw new Error("Invalid input: 'ids' must be a non-empty array.");
    }
  
    const placeholders = ids.map(() => '?').join(','); // Safely create placeholders
    const query = `DELETE FROM test WHERE id IN (${placeholders});`;
  
    try {
      const [result] = await con.query(query, ids); // Pass the array as query parameters
      return { message: "Records deleted successfully", deletedIds: ids };
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }
export async function s_name(Name,Password){
    const [rows] = await con.query(`select * from test where Name = '${Name}' and Password = '${Password}'`)
   return rows[0]
}
export async function Test_d() {
    const [res] = await con.query(`select * from dashboard`)
    return res
}