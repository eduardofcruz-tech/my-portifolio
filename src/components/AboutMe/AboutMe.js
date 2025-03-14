import '../AboutMe/AboutMe.css'

import QuoteMarks from "../../svg/svg_icons/QuoteMarks"
import Section from "../Section/Section"

function AboutMe() {
    return (
        <Section>
            <div className="div--about-me">
                <div className='div--about-me-section'>
                    <p className='p--about-me-title'>Sobre mim</p>
                    <p className='p--about-me-occupation'>Sou Estudante de<br></br>Engenharia da Computação</p>
                    <p className='p--about-me-text'>
                        Olá, meu nome é Eduardo França e sou um estudante de Engenharia da Computação apaixonado por tecnologia. Desde cedo, tenho curiosidade em entender como as coisas funcionam, o que me levou a explorar diversas áreas da computação. Atualmente, estou focado em aprimorar minhas habilidades em HTML, CSS, JavaScript, React e Python, além de utilizar o GitHub para versionamento de projetos.
                    </p>
                    <p className='p--about-me-text'>
                        Meus objetivos profissionais são amplos e abrangem áreas como desenvolvimento backend, banco de dados, segurança da informação e automação. Busco constantemente aprender e me adaptar às novas tecnologias, sempre com o objetivo de contribuir para projetos inovadores.
                    </p>
                    <p className='p--about-me-text'>
                        Nas horas vagas, gosto de me dedicar à leitura, música, filmes e passeios, buscando sempre equilibrar o aprendizado com momentos de lazer.
                    </p>
                </div>

                <div className='div--about-me-quote-marks'><QuoteMarks /></div>
            </div>
        </Section>
    )
}

export default AboutMe
