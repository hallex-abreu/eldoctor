import { Connection } from '../connection'

const table = "testing"
const db=Connection.getConnection()

export default class TestingService {
      static findAllTestings() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
    }
}