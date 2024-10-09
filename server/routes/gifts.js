import express from 'express'
import GiftsController from '../controllers/gifts.js'


const router = express.Router()

router.get('/', GiftsController.getGifts)
router.get('/gifts/:giftId', GiftsController.getGiftById)

export default router
