if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const Insurer = require('../insurer')
const RandomGenerator = require('../../helpers/generater')
const db = require('../../config/mongoose')

const NumOfFakeDate = 10

db.once('open', async () => {
    let date_temp = new Date()
    await Insurer.create({
            code:1,
            name: 'root',
            registration_date: date_temp,
            introducer_code: 0})
    date_temp.setDate(date_temp.getDate()+1)
    for(let i =2; i < NumOfFakeDate; ++i){
        const code = i
        const name = RandomGenerator.Name()
        const introducer_code = Math.floor(Math.random() * (i-1))+1
        const registration_date = RandomGenerator.Date(date_temp)
        date_temp = registration_date
        await Insurer.create({code,name,registration_date,introducer_code})
    }
    console.log('done.')
    process.exit()
    }).catch(err => {
        console.log(err);
    });
    
    
    