import spyker from '../Images/Spykar.webp'
import parx from '../Images/PArx.webp'
import vogue from '../Images/EthnoVogue.webp'
import raymond from '../Images/Raymond.webp'

const featured = [
  
    {
        id:2,
        name:"Raymond",
        price: 31000.00,
        currency:"NGN",
        description:"Raymond Men Blue Self-Design Single-Breasted Bandhgala Suit",
        image:raymond,
        instock:true,
    },
    {
        id:5,
        name:"EthnoVogue",
        price: 32569.00,
        currency:"NGN",
        description:"EthnoVogue Women Beige & Grey Made to Measure Custom Made Kurta Set with Jacket",
        image:vogue,
        instock:true,
    },
    {
        id:6,
        name:"Spykar",
        price: 4980.00,
        currency:"NGN",
        description:"SPYKAR Women Pink Alexa Super Skinny Fit High-Rise Clean Look Stretchable Cropped Jeans",
        image:spyker,
        instock:true,
    },
   
    {
        id:8,
        name:"Parx",
        price: 4000.00,
        currency:"NGN",
        description:"Parx Men Blue Slim Fit Checked Casual Shirt",
        image:parx,
        instock:false
    },
]


export default featured