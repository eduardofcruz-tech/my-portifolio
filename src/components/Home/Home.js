import Section from "../Section/Section";
import Linkedin from "../../svg/svg_social/Linkedin"
import Github from "../../svg/svg_social/Github"
import Instagram from "../../svg/svg_social/Instagram"
import './Home.css'


function Home() {
  return (
    <Section>
      <div className="div--home">
        <div className="div--home-introduce">
          <p className="div--home-introduce-name">Olá, eu sou Eduardo França</p>
          <p className="div--home-introduce-profession">Estudante de Engenharia da Computação</p>
          <button className="button--contact"><a href="#contact">Contate-me</a></button>
          <div className="div--social">
            <ul className="ul--social">
              <li className="li--social">
                <a className="a--social" href="https://www.linkedin.com/in/eduardo-franca-cruz">
                  <Linkedin></Linkedin>
                </a>
              </li>
              <li className="li--social">
                <a className="a--social" href="https://github.com/eduardofcruz-tech">
                  <Github></Github>
                </a>
              </li>
              <li className="li--social" F>
                <a className="a--social" href="https://www.instagram.com/eduardofcruz12">
                  <Instagram></Instagram>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="div--home-photo">
          
        </div>
      </div>

    </Section>
  );
}

export default Home;
