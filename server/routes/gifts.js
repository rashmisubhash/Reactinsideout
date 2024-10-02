import express from 'express'
import path from 'path'
import GiftsController from '../controllers/gifts.js'

import { fileURLToPath } from 'url'
// import giftData from '../data/nONeed.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
// router.get('/', (req, res) => {
//     res.status(200).json(giftData)
// })
router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
  })

  export default router
