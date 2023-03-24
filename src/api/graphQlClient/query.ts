import { gql } from '@apollo/client';

const queryDoctors = gql`
    query Doctors {
        doctors {
            code
            id
            name
            specialty
            whatsapp
            amount
            avatar {
                url
            }
        }
    }
`;

export {
    queryDoctors
}