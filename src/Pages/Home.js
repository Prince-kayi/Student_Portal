import React,{useState,useEffect} from 'react'
import{FaChevronCircleLeft,FaChevronCircleRight,FaBars,FaBell,FaUser} from "react-icons/fa"
import "./pages.css"
import {Link} from "react-router-dom"
const Pictures = [
    "http://flatprofile.com/wp-content/uploads/2022/02/MyNSFAS-Student-Portal.jpg",
  
    "https://applytut.com/wp-content/uploads/2022/09/NSFAS-Online-Application-2023-2024.png",
  
    " https://i.ytimg.com/vi/4T4qp1h6k6s/maxresdefault.jpg",
  
    "https://humanities.nwu.ac.za/sites/humanities.nwu.ac.za/files/files/Humanities/Registration/registration%20info%202023.png",
  
    "https://www.utdallas.edu/files/2021/01/virtual-tour-launch.jpg",
  ];
  let count = 0;
function Home() {
    const [curent, setCurent] = useState(0)
    const HandleRightClick = () => {
      count = (count + 1) % Pictures.length;
      setCurent(count);
    }
    const HandleLeftClick = () => {
      const PricsLenght = Pictures.length;
      count = (curent + PricsLenght - 1) % Pictures.length
      setCurent(count);
    }
    useEffect(() => {
      BeginSlider();
    }, []);
    const BeginSlider = () => {
      setInterval(() => {
        HandleRightClick();
      }, 4000);
    };
  return (
    <>
    <div className='home-wrapper'>
         <div className="registers-class">
      <div className="sign-submits-botton">
                  <Link  to="/academic">  <button className="submits"> Academic Records</button></Link>
                  <Link  to="/sign-up"> <button className="submits"> Registration</button></Link>
                  <Link  to="/upload"> <button className="submits"> Upload Records</button></Link>  
                 </div>                   
                  </div>
        <div className='auto-slide'>
        <img src={Pictures[curent]} alt="specials" className='sLides' />
        <div>
        <FaChevronCircleLeft className='lefti' onClick={HandleLeftClick} />
          <FaChevronCircleRight className='righti' onClick={HandleRightClick} />
             </div>
             </div>
    </div>
     <div className='box'>
     <div className='card'>
       <FaBars className='ar'/>
       <h5>Undergraduate Studies</h5>
       <div className='para'>
       <img src="https://439623b66ef2e32ac2ca-878d8b04b2333a4ce60ced655a975a22.ssl.cf3.rackcdn.com/ns_img_1617_2a9341_uni_studying_2.jpg" 
          className='images' alt='university'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
   <div className='card'>
       <FaUser className='us'/>
       <h5>Postgraduate Studies</h5>
       <div className='para'>
       <img src="https://www.brookings.edu/wp-content/uploads/2019/03/RTX2FKNP.jpg" 
          className='images' alt='university'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
     <div className='card'>
       <FaBell className='bel'/>
       <h5>Distance Learning</h5>
       <div className='para'>
       <img src="https://www.learningliftoff.com/wp-content/uploads/2015/09/HarvardUniversity_TVClassroom.jpg" 
          className='images' alt='university'/>
 <p className='middle'>
   <a className='butto'  href='#'>Read More</a>
 </p>
     </div> 
     </div>  
  </div>
  <div className='box'>
     <div className='card'>
       <FaBars className='ar'/>
       <h5>Students</h5>
       <div className='para'>
       <img src="https://features.thecrimson.com/2017/freshman-survey/img/cover_2021.jpg" 
          className='images' alt='university'/>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
   <div className='card'>
       <FaUser className='us'/>
       <h5> Short Courses</h5>
       <div className='para'>
       <p>Your journey never ends only the path that you take. At the PUT we believe that it is 
        excellence that drives you forward, 
        it is your skills that lets you prosper and it is your creativity that makes you grow..</p>
 <p className='middle'>
   <a className='butto' href='#'>Read More</a>
 </p>
       </div>
     </div>
     <div className='card'>
       <FaBell className='bel'/>
       <h5>Faculties</h5>
       <div className='para'>
       <p> Alot of  programes from different faculties are been offered at PUT. This include Engineering,
        Education,Law,Humanities,Health Science, Theology, Natural and Agricultural science</p>
 <p className='middle'>
   <a className='butto'  href='#'>Read More</a>
 </p>
       </div>
     </div>
     </div>
</>
  )
}

export default Home
