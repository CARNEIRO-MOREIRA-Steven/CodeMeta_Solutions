"use client"
import React, { useEffect, useRef, useState } from 'react'
import './a_propos.css'
import { motion, useAnimation } from "framer-motion"

const APropos = () => {
    const [aProposVisible, aProposIsVisible] = useState(false);
    const aProposRef = useRef(null);
    const aProposDescription1 = useAnimation();
    const aProposDescription2 = useAnimation();
    const aProposDescription3 = useAnimation();



    useEffect(() => {
        const aProposTopOffset = aProposRef.current.offsetTop

        const handleScroll = () => {
            if (window.scrollY > aProposTopOffset - window.innerHeight / 1) {
                aProposIsVisible(true)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        const animateAPropos = async () => {
            if (aProposVisible) {
                await aProposDescription1.start({
                    opacity: 1,
                    transition: { duration: 0.5, ease: "linear" },
                });
                await aProposDescription1.start({
                    scale: 1,
                    transition: { duration: 0.5, ease: "linear" },
                });
                await aProposDescription2.start({
                    opacity: 1,
                    transition: { duration: 1, ease: "linear" }
                });
                await aProposDescription3.start({
                    opacity: 1,
                    transition: { duration: 1, ease: "linear" }
                });

            }
        };
        animateAPropos();
    }, [aProposVisible, aProposDescription1, aProposDescription2, aProposDescription3])
    return (
        <motion.section className='a_propos_section' ref={aProposRef}>
            <h2 id='a_propos_title'>À propos de moi et CodeMeta Solutions</h2>
            <section className='a_propos_de_moi'>
                <motion.section className='qui_suis_je'
                    animate={aProposDescription1}
                    initial={{ scale: 0.5, opacity: 0 }}>
                    <section className='a_propos_description'>
                        <h3>Qui suis-je ?</h3>
                        <p>Je m'appelle CARNEIRO MOREIRA Steven, développeur web passionné et fondateur de CodeMeta Solutions. Fasciné par la manière dont le code peut donner vie à des idées,
                            j'ai décidé de créer CodeMeta Solutions pour offrir des solutions web sur mesure et personnalisées. Je me suis lancé en tant que freelance pour travailler plus
                            étroitement avec mes clients et transformer leurs idées en sites web esthétiques, fonctionnels et performants.</p>
                    </section>
                    <section className='a_propos_img'>
                        <img className='ma_photo' src='./ma_photo_profil.jpg'></img>
                    </section>
                </motion.section>
                <h2 id='a_propos_title'>Expertise et Valeurs</h2>
                <motion.section className='expertise'
                    animate={aProposDescription2}
                    initial={{ opacity: 0 }}>
                    <section className='a_propos_description'>
                        <h3>Mon expertise et mon approche</h3>
                        <p>Je suis spécialisé dans le développement front-end, avec une expertise en HTML, CSS, JavaScript, et des frameworks modernes comme Next.js et React. Mon objectif est
                             de concevoir des interfaces utilisateur qui allient esthétique, fluidité et performance. En tant que développeur indépendant, je suis engagé à fournir des
                              solutions de haute qualité adaptées aux besoins spécifiques de chaque client. Ma méthode de travailrepose sur une écoute active, une communication transparente
                              et une satisfaction client au cœur de chaque projet. Je commence par une discussion approfondie pour bien comprendre vos besoins, puis je propose des solutions
                               adaptées tout en vous tenant informé à chaque étape du projet.</p>
                    </section>
                    <section className='a_propos_img'>
                        <img className='ma_photo' src='./sur_mesure.jpg'></img>
                    </section>
                </motion.section>
                <h2 id='a_propos_title'>Pourquoi me choisir ?</h2>
                <motion.section className='me_choisir'
                    animate={aProposDescription3}
                    initial={{ opacity: 0 }}>
                        <section className='a_propos_description'>
                    <h3>Ce qui me différencie</h3>
                    <p>En choisissant de travailler avec moi, vous optez pour un partenaire unique qui s'investit pleinement dans votre projet. Mon expertise technique, combinée à une
                        approche personnalisée, me permet de créer des solutions web qui ne sont pas seulement belles mais aussi efficaces et adaptées à vos objectifs. J'ai eu le plaisir
                        de collaborer avec diverses entreprises et startups pour créer des sites web et des applications qui répondent parfaitement à leurs besoins. Vous pouvez consulter
                        quelques-unes de mes réalisations dans mon Portfolio.<br></br>
                        Mes valeurs : Transparence, engagement, et satisfaction client.</p>
                        </section>
                        <section className='a_propos_img'>
                        <img className='mon_logo' src='./codemeta_solutions.png'></img>
                    </section>
                </motion.section>
            </section>
        </motion.section>
    )
}

export default APropos
