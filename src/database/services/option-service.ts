import { Connection } from '../connection'

const table = "option"
const db=Connection.getConnection()

export default class OptionService {
      static findAllOptionsByTestingId(testing_id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where testing_id = ${testing_id}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
    }
}