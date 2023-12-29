const MaxNameLength = 10;
const AlphabetNum = 27;
const RandomGenerator ={
    Name: () => {
        let res = '';
        let length = Math.floor(Math.random() * MaxNameLength)+1;
        for(let i = 0; i < length; i++){
           const random = Math.floor(Math.random() * AlphabetNum);
           res += String.fromCharCode(97 + random);
        };
        return res;
    },
    Date: (end) => {
        const start = end //new Date(); // by default, new Date value is current date
        end.setDate(end.getDate()+10)
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
} 
module.exports = RandomGenerator