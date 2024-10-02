import { pool } from './database.js'
import './dotenv.js'
import giftData from '../data/nONeeds.js'


const createGiftsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS insideout;

    CREATE TABLE IF NOT EXISTS insideout (
        id SERIAL PRIMARY KEY NOT NULL,      
        name VARCHAR(100) NOT NULL,           
        pricePoint VARCHAR(20) NOT NULL,      
        rating DECIMAL(2,1) NOT NULL,        
        inStock BOOLEAN,             
        image TEXT,                  
        description TEXT,            
        returnItem BOOLEAN,              
        refundable BOOLEAN           
    )
`

try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 gifts table created successfully')
  }
  catch (err) {
    console.error('⚠️ error creating gifts table', err)
  }
}


  const seedGiftsTable = async () => {
    await createGiftsTable()
    giftData.forEach((gift) => {
        const insertQuery = {
          text: 'INSERT INTO insideout (name, pricePoint, rating, inStock, image, description, returnItem, refundable) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            gift.name,
            gift.pricePoint,
            gift.rating,
            gift.inStock,
            gift.image,
            gift.description,
            gift.returnItem,
            gift.refundable
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }
        
            console.log(`✅ ${gift.name} added successfully`)
        })

      })

      
  }

  seedGiftsTable()