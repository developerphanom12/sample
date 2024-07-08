import express from 'express';
import { Product, collectionslist, colorlist, filtercollections, getoffer, orderdesign, search } from './Controllerfilter.js';


const router = express.Router();


router.get("/getproduct" ,Product)

router.get("/getsearch" ,search)

router.get("/getfilter" ,filtercollections)

router.get("/getorderdesign" ,orderdesign)

router.get("/getoffer" ,getoffer)

router.get("/getcollectionslist" ,collectionslist)


router.get("/getcolorlist" ,colorlist)









  export { router as FilterRoutes };
