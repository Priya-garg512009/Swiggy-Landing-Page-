import React from 'react'
import './footer.css'
import NavLinks from './navlinks'



function Footer(props) {


const companyLinks=[
      {text:'About us' , url:'https://www.swiggy.com/about'},
      {text:'Team'  , url:'https://www.swiggy.com/team'},
      {text:'Careers'  , url:'https://www.swiggy.com/careers'},
      {text:'Swiggy Blog' , url:'https://blog.swiggy.com/'},
      {text:'Bug Bounty'  , url:'https://www.swiggy.com/bug-bounty'},
      {text:'Swiggy Super' , url:'https://www.swiggy.com/swiggy-super'},
      {text:'Swiggy Corporate' ,url:'https://corporate.swiggy.com/'},
      {text:'Swiggy Instamart' , url:'https://www.swiggy.com/swiggy-instamart'}
  ]


  const contactLinks=[
      {text:'Help & Support' , url:'https://www.swiggy.com/support'},
      {text:'Partner with us'  , url:'https://partner-with-us.swiggy.com/onboard#/swiggy'},
      {text:'Ride with us'  , url:'https://ride.swiggy.com/'}
      
  ]

  const legalLinks=[
      {text:'Terms & Conditions' , url:'https://www.swiggy.com/terms-and-conditions'},
      {text:'Refund & Cancellation'  , url:'https://www.swiggy.com/refund-policy'},
      {text:'Privacy Policy'  , url:'https://www.swiggy.com/privacy-policy'},
      {text:'Cookie Policy' , url:'https://www.swiggy.com/cookie-policy'},
      {text:'Offer Terms'  , url:'https://www.swiggy.com/offer-terms'},
      {text:'Phishing & Fraud' , url:'https://www.swiggy.com/beware-of-phishing-and-fraud'}

      
  ]
  
  const deliverlinks=[
    {text:'Abohr',url:'https:/www.swiggy.com/abohar'},
    {text:'Adilabad',url:'https://www.swiggy.com/adilabad'},
    {text:'Adityapur',url:'https://www.swiggy.com/adityapurhttps://www.swiggy.com/adityapur'},
    {text:'Adoni',url:'https://www.swiggy.com/adoni'},
    {text:'Agartla',url:'https://www.swiggy.com/agartla'},
    {text:'Agra',url:'https://www.swiggy.com/agra'},
    {text:'Ahmedabad',url:'https://www.swiggy.com/ahmedabad'},
    {text:'Ahmednagar',url:'https://www.swiggy.com/ahemdnagar'},
    {text:'Ajmer',url:'https://www.swiggy.com/ajmer'},
    {text:'Akola',url:'https://www.swiggy.com/akola'},
    {text:'Alappuzha',url:'https://www.swiggy.com/alappuzha'},
    {text:'Aligarh',url:'https://www.swiggy.com/aligarh'},
    {text:'Allahabad',url:'https://www.swiggy.com/allahabad'},
    {text:'Baddi',url:'https://www.swiggy.com/baddi'},
    {text:'Bagalkot',url:'https://www.swiggy.com/bagalkot'},
    {text:'Bagdogra',url:'https://www.swiggy.com/bagdogra'},
    {text:'Bahadurgarh',url:'https://www.swiggy.com/bahadurgarh'},
    {text:'Bahraich',url:'https://www.swiggy.com/bahraich'},
    {text:'Bajpe',url:'https://www.swiggy.com/bajpe'},
    {text:'Balaghat',url:'https://www.swiggy.com/balaghat'},
    {text:'Ballari',url:'https://www.swiggy.com/ballari'},
    {text:'Balrampur',url:'https://www.swiggy.com/balrampur'},
    {text:'Balurghat',url:'https://www.swiggy.com/balurghat'},
    {text:'Bangalore',url:'https://www.swiggy.com/bangalore'},
    {text:'Bankura',url:'https://www.swiggy.com/bankura'},
    {text:'Banswara',url:'https://www.swiggy.com/banswara'},
    {text:'Central-goa',url:'https://www.swiggy.com/central-goa'},
    {text:'Chalakkudy',url:'https://www.swiggy.com/chalakkudy'},
    {text:'Chalisgaon',url:'https://www.swiggy.com/chalisgaon'},
    {text:'Chandigarh',url:'https://www.swiggy.com/chandigarh'},
    {text:'Chandrapur',url:'https://www.swiggy.com/chandrapur'},
    {text:'Changanasherry',url:'https://www.swiggy.com/changanasherry'},
    {text:'Charkhi-dadri',url:'https://www.swiggy.com/charkhi-dadri'},
    {text:'Chengannur',url:'https://www.swiggy.com/chengannur'},
    {text:'Chennai',url:'https://www.swiggy.com/chennai'},
    {text:'Cherthala',url:'https://www.swiggy.com/cherthala'},
    {text:'Chhapra',url:'https://www.swiggy.com/chhapra'},
    {text:'Chhatarpur',url:'https://www.swiggy.com/chhatarpur'},
    {text:'Chhindwara',url:'https://www.swiggy.com/chhindwara'},
    {text:'Dabhoi',url:'https://www.swiggy.com/dabhoi'},
    {text:'Dabra',url:'https://www.swiggy.com/dabra'},
    {text:'Dahod',url:'https://www.swiggy.com/dahod'},
    {text:'Damoh',url:'https://www.swiggy.com/damoh'},
    {text:'Darbhanga',url:'https://www.swiggy.com/darbhanga'},
    {text:'Darjeeling',url:'https://www.swiggy.com/darjeeling'},
    {text:'Datia',url:'https://www.swiggy.com/datia'}
]
const deliverlinks2=[

  {text:'Dausa',url:'https://www.swiggy.com/dausa'},
  {text:'Davanagere',url:'https://www.swiggy.com/davanagere'},
  {text:'Dehradun',url:'https://www.swiggy.com/dehradun'},
  {text:'Dehri',url:'https://www.swiggy.com/dehri'},
  {text:'Delhi',url:'https://www.swiggy.com/delhi'},
  {text:'Deoghar',url:'https://www.swiggy.com/deoghar'},                                                                                                 
  {text:'Dewas',url:'https://www.swiggy.com/dewas'},
  {text:'Dhamtari',url:'https://www.swiggy.com/dhamtari'},
  {text:'Dhanbas',url:'https://www.swiggy.com/dhanbas'},
  {text:'Dhar',url:'https://www.swiggy.com/dhar'},
  {text:'Dharamshala',url:'https://www.swiggy.com/dhramshala'},
  {text:'Dharmapuri',url:'https://www.swiggy.com/dharmapuri'},
  {text:'Dharwad',url:'https://www.swiggy.com/dharwad'},
  {text:'Eluru',url:'https://www/swiggy.com/eluru'},                                                                                       
  {text:'Etawah',url:'https://www/swiggy.com/etawah'},
  {text:'Faizabad',url:'https://www/swiggy.com/faizabad'},
  {text:'Faridabad',url:'https://www/swiggy.com/faridabad'},
  {text:'Faridkot',url:'https://www/swiggy.com/faridkot'},
  {text:'Farrukhabad',url:'https://www/swiggy.com/farrukhabad'},
  {text:'Fatehabad',url:'https://www/swiggy.com/fatehabad'},
  {text:'Fatehgarh-sahib',url:'https://www.swiggy.com/fatehgarh-sahib'},
  {text:'Fatehpur',url:'https://www.swiggy.com/fatehgarh'},
  {text:'Fazilka',url:'https://www.swiggy.com/fazilka'},
  {text:'Firozabad',url:'https://www.swiggy.com/firozabad'},
  {text:'Firozpur',url:'https://www.swiggy.com/firozpur '},                                                                                           
  {text:'Gadag-betigeri',url:'https://www.swiggy.com/gadag-betigeri'},
  {text:'Gadwal',url:'https://www.swiggy.com/gadwal'},
  {text:'Gandhidham',url:'https://www.swiggy.com/gandhidham'},
  {text:'Gaya',url:'https://www.swiggy.com/gaya'},
  {text:'Gharaunda',url:'https://www.swiggy.com/gharaunda'},
  {text:'Ghaziabad',url:'https://www.swiggy.com/ghaziabad'},
  {text:'Giridih',url:'https://www.swiggy.com/giridih'},
  {text:'Godhra',url:'https://www.swiggy.com/godhra'},
  {text:'Gohana',url:'https://www.swiggy.com/gohana'},
  {text:'Gokak',url:'https://www.swiggy.com/gokak'},
  {text:'Gokarna',url:'https://www.swiggy.com/gokarna'},
  {text:'Gonda',url:'https://www.swiggy.com/gonda'},
  {text:'Gondal',url:'https://www.swiggy.com/gondal'},
  {text:'Habra',url:'https://www.swiggy.com/habra'},
  {text:'Haldia',url:'https://www.swiggy.com/haldia'},
  {text:'Haldwani',url:'https://www.swiggy.com/haldwani'},
  {text:'Halol',url:'https://www.swiggy.com/haloi'},
  {text:'Hampi',url:'https://www.swiggy.com/hampi'},
  {text:'Hansi',url:'https://www.swiggy.com/hansi'},
  {text:'Hanumangarh',url:'https://www.swiggy.com/hanumangarh'},
  {text:'Hapur',url:'https://www.swiggy.com/hapur'}
]

const deliverlinks3=[
  {text:'Kishanganj',url:'https://www.swiggy.com/kishanganj'},
  {text:'Kishangarh',url:'https://www.swiggy.com/kishangarh'},
  {text:'Kochi',url:'https://www.swiggy.com/kochi'},
  {text:'Kodaikanal',url:'https://www.swiggy.com/kodaikanal'},
  {text:'Kolar',url:'https://www.swiggy.com/kolar'},
  {text:'Kolhapur',url:'https://www.swiggy.com/kolhapur'},
  {text:'Kolkata',url:'https://www.swiggy.com/kolkata'},
  {text:'Kollam',url:'https://www.swiggy.com/kollam'},
  {text:'Korba',url:'https://www.swiggy.com/korba'},
  {text:'Kota',url:'https://www.swiggy.com/kota'},
  {text:'Kothagudem',url:'https://www.swiggy.com/kothagudem'},
  {text:'Kothamanagalam',url:'https://www.swiggy.com/kothamanagalam'},
  {text:'Kottakkal',url:'https://www.swiggy.com/kottakkal'},
  {text:'Kottarakkara',url:'https://www.swiggy.com/kottarakkara'},
  {text:'Lakhimpur',url:'https://www.swiggy.com/lakhimpur'},
  {text:'Lalitpur',url:'https://www.swiggy.com/lalitpur'},
  {text:'Latur',url:'https://www.swiggy.com/latur'},
  {text:'Lonavala',url:'https://www.swiggy.com/lonavala'},
  {text:'Lucknow',url:'https://www.swiggy.com/lucknow'},
  {text:'Ludhiana',url:'https://www.swiggy.com/ludhiana'},
  {text:'Machilipatnam',url:'https://www.swiggy.com/machilipatnam'},
  {text:'Madanapalle',url:'https://www.swiggy.com/madanapalle'},
  {text:'Madikeri',url:'https://www.swiggy.com/madikeri'},
  {text:'Madurai',url:'https://www.swiggy.com/madurai'},
  {text:'Mahasamund',url:'https://www.swiggy.com/mahasamund'},
  {text:'Mahbubnagar',url:'https://www.swiggy.com/mahbubnagar'},
  {text:'Nabadwip',url:'https://www.swiggy.com/nabadwip'},
  {text:'Nadiad',url:'https://www.swiggy.com/nadiad'},
  {text:'Nagaon',url:'https://www.swiggy.com/nagaon'},
  {text:'Nagapattinam',url:'https://www.swiggy.com/nagapattinam'},
  {text:'Nagda',url:'https://www.swiggy.com/nagda'},
  {text:'Nagercoil',url:'https://www.swiggy.com/nagercoil'},
  {text:'Nagpur',url:'https://www.swiggy.com/nagpur'},
  {text:'Nagur',url:'https://www.swiggy.com/nagur'},
  {text:'Nainital',url:'https://www.swiggy.com/nainital'},
  {text:'Nalgonda',url:'https://www.swiggy.com/nalgonda'},
  {text:'Namakkal',url:'https://www.swiggy.com/namakkal'},
  {text:'Nanded',url:'https://www.swiggy.com/nanded'},
  {text:'Nandurbar',url:'https://www.swiggy.com/nandurbar'},
  {text:'Ongole',url:'https://www.swiggy.com/ongole'},
  {text:'Ooty',url:'https://www.swiggy.com/ooty'},
  {text:'Orai',url:'https://www.swiggy.com/orai'},
  {text:'Osmanabad',url:'https://www.swiggy.com/osmanabad'},
  {text:'Pala',url:'https://www.swiggy.com/pala'},
  {text:'Palakkad',url:'https://www.swiggy.com/palakkad'},
  {text:'Palanpur',url:'https://www.swiggy.com/palanpur'}
]
const deliverlinks4=[
  {text:'Puddukkottai',url:'https://www.swiggy.com/puddokkottai'},
  {text:'Pune',url:'https://www.swiggy.com/pune'},
  {text:'Puri',url:'https://www.swiggy.com/puri'},
  {text:'Purnea',url:'https://www.swiggy.com/purnea'},
  {text:'Purulia',url:'https://www.swiggy.com/purulia'},
  {text:'Puttur',url:'https://www.swiggy.com/puttur'},
  {text:'Rae-bareli',url:'https://www.swiggy.com/rae-bareli'},
  {text:'Raichur',url:'https://www.swiggy.com/raichur'},
  {text:'Raiganj',url:'https://www.swiggy.com/raiganj'},
  {text:'Raigarh',url:'https://www.swiggy.com/raigarh'},
  {text:'Raipur',url:'https://www.swiggy.com/raipur'},
  {text:'Rajahmundry',url:'https://www.swiggy.com/rajahmundry'},
  {text:'Rajapalayam',url:'https://www.swiggy.com/rajapalayam'},
  {text:'Sagar',url:'https://www.swiggy.com/sagar'},
  {text:'Sagara',url:'https://www.swiggy.com/sagara'},
  {text:'Saharanpur',url:'https://www.swiggy.com/saharanpur'},
  {text:'Saharsa',url:'https://www.swiggy.com/saharsa'},
  {text:'Salem',url:'https://www.swiggy.com/salem'},
  {text:'Samastipur',url:'https://www.swiggy.com/samastipur'},
  {text:'Sambalpur',url:'https://www.swiggy.com/sambalpur'},
  {text:'Sambhal',url:'https://www.swiggy.com/sambhal'},
  {text:'Sangamner',url:'https://www.swiggy.com/sangamner'},
  {text:'Sangaria',url:'https://www.swiggy.com/sangaria'},
  {text:'Sangli',url:'https://www.swiggy.com/sangli'},
  {text:'Sangrur',url:'https://www.swiggy.com/sangrur'},
  {text:'Sardarshahar',url:'https://www.swiggy.com/sardarshahar'},
  {text:'Tadepalligudem',url:'https://www.swiggy.com/tadepalligudem'},
  {text:'Tadpatri',url:'https://www.swiggy.com/tadpatri'},
  {text:'Taliparamba',url:'https://www.swiggy.com/taliparamba'},
  {text:'Tamluk',url:'https://www.swiggy.com/tamluk'},
  {text:'Tanuku',url:'https://www.swiggy.com/tanuku'},
  {text:'Tarn-taran-sahib',url:'https://www.swiggy.com/tarn-taran-sahib'},
  {text:'Tezpur',url:'https://www.swiggy.com/tezpur'},
  {text:'Talassery',url:'https://www.swiggy.com/thalassery'},
  {text:'Tanjavur',url:'https://www.swiggy.com/thanjavur'},
  {text:'Teni',url:'https://www.swiggy.com/theni'},
  {text:'Tiruvalla',url:'https://www.swiggy.com/thiruvalla'},
  {text:'Tiruvallur',url:'https://www.swiggy.com/thiruvallur'},
  {text:'Tiruvananthapuram',url:'https://www.swiggy.com/thiruvananthapuram'},
  {text:'Udaipur',url:'https://www.swiggy.com/udaipur'},
  {text:'Udgir',url:'https://www.swiggy.com/udgir'},
  {text:'Ujjain',url:'https://www.swiggy.com/ujjain'},
  {text:'Uluberia',url:'https://www.swiggy.com/uluberia'},
  {text:'Unnao',url:'https://www.swiggy.com/unnao'},
  {text:'Vadodara',url:'https://www.swiggy.com/vadodara'},
  {text:'Vijayawada',url:'https://www.swiggy.com/vijayawada'}
]

return (
      <div className="bg" >
          
             
          <div className="wrapper container">
          <NavLinks heading="company" links={companyLinks} showHeading={true}></NavLinks>
          <NavLinks heading="contact" links={contactLinks} showHeading={true}></NavLinks>
          <NavLinks heading="legal"   links ={legalLinks} showHeading={true}></NavLinks>
          <nav>
        <ul className='footerimg'>
          <li className="footer-img1">
            <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt=""/></a>
          </li>
          <li className="footer-img2">
            <a href="https://web.archive.org/web/20210620053825/https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"><img  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt=""/></a>
          </li>
        </ul>
      </nav>
          <div className="container"><hr></hr></div>
          </div>
          <div className="container">
          <NavLinks heading = "we deliver to" links={deliverlinks} showHeading={true}></NavLinks>
          <NavLinks links={deliverlinks2} showHeading={true}></NavLinks>
          <NavLinks links={deliverlinks3} showHeading={true}></NavLinks>
          <NavLinks links={deliverlinks4} showHeading={true}></NavLinks>
          <div className="container"><hr></hr></div>
          </div>
          <div className="container">
          <img class="img1" width="142" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"/> 
          <div class="fdiv">© 2021 Swiggy</div>
          <img class="img2" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"></img>
          <img class="img3" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"></img>
          <img class="img4" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"></img>
          <img class="img5" width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"></img>
          </div>
        </div>
    );
}


export default Footer;