import {Router} from 'express'
import routers  from './products.mjs'
 import router from './users.mjs'

const rout=Router();
rout.use(router)
rout.use(routers)


export default rout;