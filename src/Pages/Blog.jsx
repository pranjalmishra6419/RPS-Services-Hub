import React from 'react'
import './CSS/Blog.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Blog = () => {
    
const blog = [
  {
    image:
      "/image/raf1.jpg",
    category: "HOME SERVICES",
    title: "🔌 Electrician",
    description:
      "Electrician ghar aur office ki electrical problems ko solve karta hai Wiring, switch, socket, fan aur light installation electrician ke common kaam hain. Faulty wiring aur short circuit ki problem ko check karke repair kiya jata hai. New electrical points aur connections install karne mein bhi electrician help karta hai. Fan, light, switchboard aur other electrical items ko replace ya repair kiya ja sakta hai.Electrical leakage aur power-related problems ko identify karna bhi electrician ka important kaam hai.Electrician electrical safety ka bhi dhyan rakhta hai. Regular electrical checking se future problems ko reduce karne mein help mil sakti hai. Kisi bhi major electrical problem ke liye trained professional ki service lena better hota hai. Electrician ke saath apni electrical problems ke liye reliable home service paayein.",
  },
  {
    image:
      "/image/raf2.jpg",
    category: "HOME SERVICES",
    title: "🔧 Plumber ?",
    description:
      "Plumber ghar aur office ki water aur plumbing problems ko solve karta hai. Nalki, pipe leakage, tap aur shower ki repair plumber ka common kaam hai. Blocked drain aur water drainage ki problems ko bhi plumber fix karta hai. Water tank aur pipeline ki fitting aur maintenance mein plumber help karta hai. Bathroom aur kitchen mein new taps, pipes aur fittings install ki ja sakti hain.   Leakage wali pipes ko repair ya replace karna bhi plumber ka important kaam hai. Low water pressure aur water flow ki problems ko check kiya ja sakta hai.Regular plumbing maintenance se bade leakage aur blockage ko avoid karne mein help milti hai.           Kisi major plumbing problem ke liye trained professional ki service lena better hota hai.",
  },
  {
    image: "/image/raf3.jpg",
    category: "Virtual Reality",
    title: "🔧 Appliance Repair",
    description:
      "Appliance Repair service ghar ke electronic aur electrical appliances ki problems ko solve karti hai. Washing machine, refrigerator, microwave, cooler aur other appliances ki repairing ki jaati hai. Technician appliance ko check karke problem ka main reason identify karta hai. Faulty parts ko repair ya zarurat padne par replace kiya ja sakta hai. Washing machine mein water, spinning ya noise ki problem ko fix kiya ja sakta hai. Refrigerator ki cooling aur unusual noise jaisi problems ko bhi check kiya jata hai. Microwave aur other kitchen appliances ki electrical problems ko safely repair kiya ja sakta hai. Regular maintenance se appliances ki performance better maintain karne mein help milti hai. Kisi major electrical appliance problem ke liye trained technician ki service lena better hota hai.",
  },

  // {
  //   image: "/images/p uniqe.jpg",
  //   category: "HOME SERVICES",
  //   title: "🔧 Plumber ?",
  //   description:
  //     "Plumber ghar aur office ki water aur plumbing problems ko solve karta hai. Nalki, pipe leakage, tap aur shower ki repair plumber ka common kaam hai. Blocked drain aur water drainage ki problems ko bhi plumber fix karta hai. Water tank aur pipeline ki fitting aur maintenance mein plumber help karta hai. Bathroom aur kitchen mein new taps, pipes aur fittings install ki ja sakti hain.   Leakage wali pipes ko repair ya replace karna bhi plumber ka important kaam hai. Low water pressure aur water flow ki problems ko check kiya ja sakta hai.Regular plumbing maintenance se bade leakage aur blockage ko avoid karne mein help milti hai.           Kisi major plumbing problem ke liye trained professional ki service lena better hota hai.",
  // },

   {
    image: "/image/raf4.jpg",
    category: "HOME SERVICES",
    title: "🚗 Vehicle Service (Car/Bike) ?",
    description:
      " Vehicle service mein car aur bike ki regular servicing aur maintenance ki jaati hai. Engine oil, brake, tyre, battery aur other important parts ko check kiya jata hai. Vehicle mein unusual noise, starting problem ya performance issue ko diagnose kiya ja sakta hai. Brake aur clutch ki condition check karke zarurat ke according repair ki jaati hai. Tyre pressure aur wheel-related problems ko bhi check kiya jata hai. Battery aur electrical system ki checking bhi vehicle service ka important part hai.         Regular servicing se vehicle ki performance aur maintenance better rakhne mein help milti hai. Car ya bike ke faulty parts ko repair ya replace kiya ja sakta hai. Experienced technician vehicle ki problem ko identify karke proper service provide karta hai",
  },

   {
    image: "/image/raf5.jpg",
    category: "HOME SERVICES",
    title: "📦 Moving & Shifting Service?",
    description:
      "Moving & Shifting service ghar ya office ko ek location se doosri location par shift karne mein help karti hai. Is service mein packing, loading, transportation aur unloading jaise kaam include ho sakte hain. Professional team furniture aur other saman ko carefully pack karti hai. Fragile items jaise glass, electronics aur kitchen items ko extra care ke saath handle kiya jata hai.   Heavy furniture ko safely load aur unload karne mein trained workers help karte hain. Transportation ke liye suitable vehicle ka use kiya jata hai. Proper packing se saman ko damage hone ke risk ko kam karne mein help milti hai. Home shifting ke saath office aur small business shifting mein bhi assistance mil sakti hai. Shifting se pehle timing, distance aur service charges ko confirm karna useful hota hai",
  },

   {
    image: "/image/raf6.jpg",
    category: "HOME SERVICES",
    title: "💻 Tech Services ?",
    description:
      "Tech Services mein computer, laptop aur other digital devices se related problems ka solution diya jata hai. Laptop ya computer slow hone, hang hone aur software problems ko check kiya ja sakta hai. Windows, software aur required applications ki installation aur setup mein help milti hai. Internet, Wi-Fi aur basic network connectivity problems ko troubleshoot kiya ja sakta hai.        Printer, scanner aur other computer accessories ki basic problems bhi check ki ja sakti hain. Data backup, system setup aur basic device maintenance mein professional assistance milti hai. Virus ya unwanted software ki problems ko identify karke system ko secure rakhne mein help ki ja sakti hai. New computer ya laptop setup karne mein bhi technician assistance provide kar sakta hai.  Regular maintenance se devices ki performance ko better maintain karne mein help milti hai.",
  },

  //  {
  //   image: "/images/pestcontrol icon.jpg",
  //   category: "HOME SERVICES",
  //   title: "🐜 Pest Control Service ?",
  //   description:
  //     "Pest Control service ghar aur office ko unwanted pests se protect karne mein help karti hai. Cockroach, ants, termites, mosquitoes aur other pests ki problem ko identify kiya jata hai. Professional team affected areas ko check karke suitable treatment suggest karti hai. Kitchen, bathroom, bedroom aur other areas mein pest problem ko control kiya ja sakta hai.     Termite treatment se furniture aur wooden items ko protect karne mein help milti hai. Mosquito aur insects ki problem ko reduce karne ke liye proper treatment kiya jata hai. Regular pest control se unwanted pests ki problem ko manage karne mein help mil sakti hai.Treatment ke dauran safety instructions ko follow karna important hota hai. Professional pest control service ghar ko clean aur comfortable maintain karne mein help karti hai.",
  // },



];
  return (
    <>
    <Header/>
    <div className="blog-page">
      {/* Blog Section */}
      <section className="blog-section">

        <h2 className="section-title">
          BLOGS
        </h2>

        <div className="blog-list">

          {blog.map((blog, index) => (
            <article className="blog-card" key={index}>

              {/* Image */}
              <div className="blog-image-box">
                <img src={blog.image} alt={blog.title} />
              </div>

              {/* Content */}
              <div className="blog-content">

                <h1>{blog.title}</h1>

                <p>{blog.description}</p>
              </div>

            </article>
          ))}

        </div>
      </section>

    </div>
    <Footer/>
    </>
  )
}

export default Blog