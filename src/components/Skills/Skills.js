import Html from "../../svg/svg_skills/Html";
import CSS from "../../svg/svg_skills/CSS";
import Section from "../Section/Section";
import JavaScript from "../../svg/svg_skills/JavaScript";
import ReactJS from "../../svg/svg_skills/ReactJS";
import Python from "../../svg/svg_skills/Python";
import GitHub from "../../svg/svg_skills/GitHub";

import '../Skills/Skills.css'

function Skills() {
    return (
        <Section>
            <div className="div-skills">Skills</div>
            <div className="div-list--skills">
                <div className="li--skills">
                    <div className="div--skill-logo"><Html /></div>
                    <p className="div--skill-name">HTML</p> 
                </div>
                <div className="li--skills">
                    <div className="div--skill-logo" ><CSS /></div>
                    <p className="div--skill-name">CSS</p> 
                </div>
                <div className="li--skills">
                    <div className="div--skill-logo"><JavaScript /></div>
                    <p className="div--skill-name">JAVASCRIPT</p> 
                </div>
                <div className="li--skills">
                    <div className="div--skill-logo"><ReactJS /></div>
                    <p className="div--skill-name">REACT.JS</p> 
                </div>
                <div className="li--skills">
                    <div className="div--skill-logo"><Python /></div>
                    <p className="div--skill-name">PYTHON</p> 
                </div>
                <div className="li--skills">
                    <div className="div--skill-logo"><GitHub /></div>
                    <p className="div--skill-name">GITHUB</p> 
                </div>
                
            </div>
        </Section>
    )
}

export default Skills
