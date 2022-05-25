import React from "react";
import img from "../../assets/img/me.jpg";
import fb from "../../assets/img/facebook-letter-logo.png";
import linkedIn from "../../assets/img/linked-in-logo-of-two-letters.png";
import twitter from "../../assets/img/twitter.png";
import git from "../../assets/img/icons8-github-128.png";

const MyPortFolio = () => {
  return (
    <>
      <div className="px-5 md:w-3/4 lg:h-1/2 mx-auto">
        <h2 className="text-center text-secondary font-bold text-xl md:text-5xl pt-10 ">
          Welcome To My Portfolio
        </h2>
        <p className="md:text-lg font-semibold text-stone-600 my-10">
          Helllo! My name is
          <span className="font-bold text-primary"> Md Mahbubur Rahman</span>. I
          am a Web Developer living in Noakhali, Bangladesh. I make Web
          Applications , usually with React JS. Although I use React Js, but
          picking up a new framework and language isn't a problem. I have also
          knowledge of javascript programming language.
        </p>
        <div className="avatar flex justify-center ">
          <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mx-auto flex justify-around mt-10 mb-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MD-MAHBUBUR-RAHMAN"
        >
          <img
            src={git}
            alt="githubLink"
            className="w-12 border p-1 bg-slate-100 rounded-lg"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/MdMahbuburRahmanNirjhor"
        >
          <img
            src={fb}
            alt="facebookLink"
            className="w-12 border p-1 bg-slate-100 rounded-lg"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/md-mahbubur-rahman-160127140/"
        >
          <img
            src={linkedIn}
            alt="LinkedIn"
            className="w-12 border p-1 bg-slate-100 rounded-lg"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Nirjhor_1988"
        >
          <img
            src={twitter}
            alt="twitter"
            className="w-12 border p-1 bg-slate-100 rounded-lg"
          />
        </a>
      </div>
      <hr />
      <div className="px-5 md:w-3/4 lg:w-1/2 mx-auto my-10">
        <div className="mx-w-96 bg-base-100 shadow-xl py-5 rounded">
          <h2 className="uppercase text-2xl font-semibold text-primary text-center">
            My Skill on Web Technology
          </h2>
          <ul className="text-xl font-xs text-sky-300  text-center">
            <li>* Html</li>
            <li>* css & css3</li>
            <li>* BootStrap and TailWind Css</li>
            <li>* JavaScript</li>
            <li>* React JS</li>
            <li>* Firebase</li>
            <li>* MongoDB and REST api</li>
          </ul>
        </div>
      </div>
      <div className="px-5 md:w-3/4 lg:w-1/2 mx-auto my-10">
        <div className="mx-w-96 bg-base-100 shadow-xl py-5 rounded">
          <h2 className="uppercase text-2xl font-semibold text-primary text-center">
            Projects
          </h2>
          <p className="text-xl font-xs text-sky-300  text-center list-none">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ware-house-management.web.app/"
              >
                WareHouse management
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://power-fitness-cd742.web.app/"
              >
                Fitness APP
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bookreview2022.netlify.app/"
              >
                Book Review App
              </a>
            </li>
          </p>
        </div>
      </div>
      <div className="px-5 md:w-3/4 lg:w-1/2 mx-auto my-10">
        <div className="mx-w-96 bg-base-100 shadow-xl py-5 rounded">
          <h2 className="uppercase text-2xl font-semibold text-primary text-center">
            Contact Information
          </h2>
          <p className="text-xl font-xs text-sky-300  text-center list-none">
            <li>
              Phone : <span className="text-secondary"> +8801920462528</span>
            </li>
            <li>
              Email :
              <span className="text-secondary"> mahabub211288@gmail.com</span>
            </li>
            <li>
              Email :
              <span className="text-secondary"> nirjhor211288@gmail.com</span>
            </li>
          </p>
        </div>
      </div>
    </>
  );
};

export default MyPortFolio;
