

import bcrypt from 'bcrypt'



export const hashPassword = (password) => {

    return bcrypt.hashSync(password, 10);
}

export const comparePassword = (plain, hashed) => {
    return bcrypt.compareSync(plain, hashed);
}