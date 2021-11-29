
import './App.css';
import 'react-bootstrap';
import Face_Mystery from './Face-Mystery.png';
import head from './head.jpeg';
import html from './html.png';
import css from './css.png';
import js from './js.png';
import react from './react.png';
import java from './java.png';
import mysql from './mysql.png';
import AWS from './AWS.jpg';
import CER from './CER.png';
import WEB from './WEB.png';
import training from './training.jpg';

const fillStar=<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>;

const halfStar=<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"/>
</svg>;

const star=<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>;
function App() {
  return (
    <div>
          {/* Introduction */ }
          <div class="main">
          <img className="back_image" src={head} alt="head"/>
          <h1 className="heading">Hi, I am <br/> Meghna Garg</h1>
          <span className="change_content"></span>
          </div>
          {/* Projects */ }
            <h1 className="title">Projects</h1>
            {/*Project1*/}
            <div className="project">
                <div className="description">
                  <time className="time_des">June,2017 - July, 2017</time>
                  <p className="para">No. of Team-mates: 1<hr/>The aim of this project is user can check their guessing power. In this project, there will be shown different parts of celebrities face and user has to identify the celebrities name.</p>
                </div>
                <div className="line">
                  <span className="circle"></span>
                </div>
                <div className="mystery">
                  <span className="proj_name">Java: Face Mystery</span><br/>
                  <img className="proj_image" src={Face_Mystery} alt="face Mystery"/>
                  <br/><br/><a target='_blank' rel="noopener noreferrer" href="https://github.com/meghna2602/Face-Mystery.git" className="link">Project Link</a><br/>
                </div>
            </div>
            {/*Project2*/}
            <div className="project">
              <br/>
                <div className="mystery">
                  <span className="proj_name">Training and Placement Cell</span><br/>
                  <img className="proj_image" src={training} alt="face Mystery"/><br/>
                  <br/><a target='_blank' rel="noopener noreferrer" href="https://github.com/meghna2602/Training-and-Placement-Cell.git" className="link">Project Link</a>
                </div>
                <div className="line">
                  <span className="circle"></span>
                </div>
                <div className="description">
                  <time className="time_des">Sept,2018 - Oct, 2018</time>
                  <p className ="para">No. of team-mates: 2<br/>
                  Technologies: HTML, CSS, JSP, Java<br/> My role: Documentation and Design<hr/>The aim of this project is that students and companies can directly interact with each other. Students can upload their qualifications and reach out to their desired companies. COmpanies can check the students who applied to their profiles and contact to the skilled profile.</p>
                </div>
            </div>
            <br/>
            <hr/>
          {/* Skills */ }
            <h1 className="title">Skills</h1>
            <div class="skills">
              <div className="front">
                <h2 className="front_heading">Front End Developer</h2>
                <ul>
                  <li><img className="html" src={html} alt="Skills"/><span class="text">HTML </span><span class="stars">{fillStar}{fillStar}{fillStar}{halfStar}{star}</span></li>
                  <li><img className="css" src={css} alt="Skills"/><span class="text">   CSS  </span><span class="stars">{fillStar}{fillStar}{fillStar}{halfStar}{star}</span></li>
                  <li><img className="js" src={js} alt="Skills"/><span class="text">JavaScript </span><span class="stars">{fillStar}{halfStar}{star}{star}{star}</span></li>
                  <li><img className="js" src={react} alt="Skills"/><span class="text">ReactJS </span><span class="stars">{halfStar}{star}{star}{star}{star}</span></li>
                </ul>
              </div>
              <div>
              <div class="prog">
              <h2 className="front_heading">Programming Languages</h2>
                <ul>
                  <li><img className="html" src={java} alt="Skills"/><span class="text">JAVA</span><span class="stars"> {fillStar}{fillStar}{fillStar}{halfStar}{star}</span></li>
                  <li><img className="js" src={js} alt="Skills"/><span class="text">JavaScript </span><span class="stars">{fillStar}{halfStar}{star}{star}{star}</span></li>
                </ul>
              </div>
              <br/>
              <div className="data">
              <h2 className="front_heading">Database</h2>
                <ul>
                <li><img className="html" src={mysql} alt="Skills"/><span class="text">MySQL </span><span class="stars">{fillStar}{fillStar}{fillStar}{halfStar}{star}</span></li>
                </ul>
              </div>
              </div>
            </div>
            <br/>
            <hr/>
            {/* Courses */}
            <h1 className="title">Courses and Certifications</h1>
           <div className="course">
            <div className="course1">
              <h2 className="course_heading">Google Developer Group</h2>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1_xPw5T4rHUMpQW1kvMN8biTRHqNW90zz/view?usp=sharing" ><img class="cert_size" src={CER} alt="CER"/></a>
            </div>
            <div className="course1">
              <h2 className="course_heading">AWSOME DAY Online Conference</h2>
              <a target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1xzS9IT0v7tIveVBCnzt4im8JkVmXuvWR/view"><img class="cert_size" src={AWS} alt="CER"/></a>
            </div>
            <div className="course1">
              <h2 className="course_heading">Learn HTML5 and CSS3 and Build a Professional Website</h2>
              <a target='_blank' rel="noopener noreferrer" href="https://udemy-certificate.s3.amazonaws.com/image/UC-8bbb053e-8f9b-4d54-9fc3-091e7418055c.jpg"><img class="cert_size" src="https://udemy-certificate.s3.amazonaws.com/image/UC-8bbb053e-8f9b-4d54-9fc3-091e7418055c.jpg" alt="UDEMY"/></a>
            </div>
           </div>
          <br/>
          <hr/>
          {/*Subject Of Interest*/}
          <h1 className="title">Subject of Interest</h1>
          <div className="subject">
            <div className="sub1">
              <img className="interest1"src={java} alt="java"/>
            </div>
            <div className="sub2">
              <img className="interest2"src={mysql} alt="java"/>
            </div>
            <div className="sub3">
              <img className="interest3"src={WEB} alt="java"/><br/>
              <span className="subject3">Web </span>
              <span className="subject2">Development</span>
            </div>
          </div>
          <br/>
          <hr/>
        {/*Academics*/}
        <h1 className="title">Academics</h1>
      <div className="aca">
        <div className="academics">
          <div className="aca_back">
            <span className="Grad">
              Chandigarh Univeristy - B.E(CSE)</span><br/><span className="marks">2016-2020<br/>CGPA: 7.6</span>
              <br/>
              <br/>
              <span className="Grad">
              Govt. Model Sen. Sec. School, PheelKhana - 12th</span><br/><span className="marks">2015-2016<br/>CGPA: 9.0</span>
              <br/>
              <br/>
              <span className="Grad">
              Narain Public School - 10th</span><br/><span className="marks">2013-2014<br/>CGPA: 7.8</span>
          </div>
        </div>
      </div>        
      <br/><hr/>
    </div>
  );
}

export default App;