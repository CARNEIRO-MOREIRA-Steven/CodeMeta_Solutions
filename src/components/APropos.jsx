"use client"
import React, { useEffect, useRef, useState } from 'react'
import './a_propos.css'
import {motion, useAnimation} from "framer-motion"

const APropos = () => {
    const [aProposVisible, aProposIsVisible] = useState(false);
    const aProposRef = useRef(null);
    const aProposDescription1 = useAnimation();
    const aProposDescription2 = useAnimation();
    const aProposDescription3 = useAnimation();
    const aProposDescription4 = useAnimation();
    const aProposDescription5 = useAnimation();
    const aProposDescription6 = useAnimation();
    const aProposDescription7 = useAnimation();



    useEffect (() => {
        const aProposTopOffset = aProposRef.current.offsetTop 

        const handleScroll = () => {
            if(window.scrollY > aProposTopOffset - window.innerHeight / 1){
                aProposIsVisible(true)
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(()=>{
        const animateAPropos = async () => {
            await aProposDescription1.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"},
            });
            await aProposDescription1.start({
                scale : 1,
                transition : { duration : 0.5, ease : "linear"},
            });
            await aProposDescription2.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"}
            });
            await aProposDescription3.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"}
            });
            await aProposDescription4.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"}
            })
            if(aProposVisible){
                await aProposDescription5.start({
                    opacity : 1,
                    transition : { duration : 1, ease : "linear"}
                })
            
            await aProposDescription6.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"}
            });
            await aProposDescription7.start({
                opacity : 1,
                transition : { duration : 1, ease : "linear"}
            })
        }};
        animateAPropos();
    }, [aProposVisible, aProposDescription1, aProposDescription2, aProposDescription3, aProposDescription4, aProposDescription5,aProposDescription6, aProposDescription7])
  return (
    <motion.section className='a_propos_section'>
        <section className='a_propos_de_moi'>
        <motion.section className='a_propos_description 1'
        animate={aProposDescription1}
        initial={{scale : 0.5, opacity : 0}}>
        <h2 id='a_propos_title'>Qui suis-je ?</h2>
        <p>Je m'appelle CARNEIRO MOREIRA Steven, développeur web passionné et fondateur de CodeMeta Solutions. Avec une expertise en front-end et une approche centrée sur l'utilisateur, je m'efforce de transformer vos idées en sites web esthétiques, fonctionnels et performants.</p>
        </motion.section>
        <motion.section className='a_propos_description 3'
        animate={aProposDescription3}
        initial={{opacity : 0}}>
        <h2 id='a_propos_title'>Mon parcours</h2>
        <p>Depuis mes débuts dans le développement web, j'ai toujours été fasciné par la manière dont le code peut donner vie à des idées. Après plusieurs années d'expérience dans diverses agences et entreprises, j'ai décidé de me lancer en tant que freelance pour offrir des solutions sur mesure et plus personnalisées à mes clients.</p>
        </motion.section>
        <motion.section ref={aProposRef} className='a_propos_description 5'
        animate={aProposDescription5}
        initial={{opacity : 0}}>
        <h2 id='a_propos_title'>Mes réalisations</h2>
        <p>J'ai eu le plaisir de collaborer avec diverses entreprises et startups pour créer des sites web et des applications qui répondent parfaitement à leurs besoins. Vous pouvez consulter quelques-unes de mes réalisations dans mon Portfolio.</p>
        </motion.section>
        </section>
        <section className='a_propos_expertise'>
        <motion.section className='a_propos_description 2'
        animate={aProposDescription2}
        initial={{opacity : 0}}>
            <h2 id='a_propos_title'>Mon expertise</h2>
            <p>Je suis spécialisé dans le développement front-end, avec une expertise particulière en HTML, CSS, JavaScript, et des frameworks modernes comme Next.js et React. Mon objectif est de créer des interfaces utilisateur qui allient esthétique, fluidité, et performance.</p>
        </motion.section>
        <motion.section className='a_propos_description 4'
        animate={aProposDescription4}
        initial={{opacity : 0}}>
            <h2 id='a_propos_title'>Mes valeurs</h2>
            <p>En tant que développeur indépendant, je m'engage à offrir des solutions de haute qualité, adaptées aux besoins spécifiques de chaque client. La transparence, la communication, et la satisfaction client sont au cœur de mon approche.</p>
        </motion.section>
        <motion.section className='a_propos_description 6'
        animate={aProposDescription6}
        initial={{opacity : 0}}>
            <h2 id='a_propos_title'>Mon approche</h2>
            <p>Ma méthode de travail est simple et efficace : je commence par une discussion approfondie pour bien comprendre vos besoins et vos objectifs. Ensuite, je propose des solutions adaptées, tout en vous tenant informé à chaque étape du projet. Mon but est de rendre le processus de création aussi fluide que possible pour vous.</p>
        </motion.section>
        </section>
        <motion.section className='a_propos_description 7 me_choisir'
        animate={aProposDescription7}
        initial={{opacity : 0}}>
            <h2 id='a_propos_title'>Pourquoi me choisir ?</h2>
            <p>En me choisissant, vous optez pour un partenaire unique qui s'investit pleinement dans votre projet. Mon expertise technique, combinée à une approche personnalisée, me permet de créer des solutions web qui ne sont pas seulement belles, mais aussi efficaces et adaptées à vos objectifs.</p>
        </motion.section>
    </motion.section>
  )
}

export default APropos
