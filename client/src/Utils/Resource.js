import acer from '../images/acer.png'
import alien from '../images/alien.jpg'
import dell from '../images/dell.webp'
import fujitsu from '../images/fujitsu.jpg'
import hp from '../images/hp.jpg'
import lg from '../images/lg.jpg'
import macbook from '../images/macbook.png'
import samsung from '../images/samsung.jpg'

export const laptopCategories = [
    {id:1, name: "ACER", 
    price: "$300",
    spec: "Acer Spin 5",
    image: acer, rating: 3, 
    about: "The correct answer is that Acer is not the best brand out there, but it's not particularly bad either. It isn't as good as more premium brands like Apple or Dell, but there are still some great Acer laptop models being released over the past few years."},

   
    {id:2, name: "DELL", 
    image: dell, rating: 4.5,
    price: "$500",
    spec: "Dell XPS 13",
    about: "XPS and Inspiron laptops are among the best devices in the industry, combining stylish form and exceptional functionality. XPS and Inspiron laptops are among Dell's best laptops this year with power, performance, and displays for every person."},

   
    {id:3, name: "HP", 
    image: hp, rating: 5, 
    price: "$700",
    spec: "Hp elitebook folio",
    about: "Hewlett-Packard Company, American manufacturer of software and computer services. The company split in 2015 into two companies: HP Inc. and Hewlett Packard Enterprise. Headquarters were in Palo Alto, California."},

    {id:4, name: "LG", 
    image: lg, rating: 4, 
    price: "$350",
    spec: "LG gram ",
    about: "Might meets light in our ultra-lightweight laptops. Pursue your passions and maximize productivity on the go with the new Windows 11, made with tools to help you multitask, think, create and connect."},

    {id:5, name: "MACBOOK", 
    image: macbook, rating: 5, 
    price: "$560",
    spec: "macbook pro 2020",
    about: " Apple MacBooks are great laptops. Contrary to what you might think, the MacBook Air is arguably the most powerful portable computer you can get for under a grand, and if you're after the best laptop, pretty much any MacBook is guaranteed to fit the bill."},

    {id:6, name: "SAMSUNG", 
    image: samsung, rating: 4, 
    price: "$2000",
    spec: "Qualcomm Snapdragon ",
    about: "Is Samsung A Good Laptop Brand? Samsung is an excellent laptop brand. They build top-of-the-line devices not just for work, but also for home and entertainment use. Just like they do with their smartphones and tablets, Samsung builds their laptops with deluxe designs and components"}
]