"use client"
import React, { useEffect, useRef, useState } from 'react';
import './a_propos.css';
import { motion, useAnimation } from "framer-motion";

const APropos = () => {
    const [aProposVisible, aProposIsVisible] = useState(false);
    const [aProposExpertiseVisible, aProposExpertiseIsVisible] = useState(false);
    const [aProposChoixVisible, aProposChoixIsVisible] = useState(false);

    const aProposDeMoiRef = useRef(null);
    const aProposExpertiseRef = useRef(null);
    const aProposChoixRef = useRef(null);

    const aProposTitle = useAnimation();
    const maPhoto = useAnimation ();
    const expertiseTitle = useAnimation();
    const aProposDescription1 = useAnimation();
    const expertiseImage = useAnimation();
    const aProposDescription2 = useAnimation();
    const logoImage = useAnimation();
    const aProposDescription3 = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            const aProposRect = aProposDeMoiRef.current?.getBoundingClientRect();
            const expertiseRect = aProposExpertiseRef.current?.getBoundingClientRect();
            const choixRect = aProposChoixRef.current?.getBoundingClientRect();

            const aProposMidOffset = aProposRect.top + aProposRect.height / 5;
            const expertiseMidOffset = expertiseRect.top + expertiseRect.height / 1;
            const choixMidOffset = choixRect.top + choixRect.height / 2;

            if (aProposMidOffset < windowHeight && aProposMidOffset > 0 && !aProposVisible) {
                aProposIsVisible(true);
            }
            if (expertiseMidOffset < windowHeight && expertiseMidOffset > 0 && !aProposExpertiseVisible) {
                aProposExpertiseIsVisible(true);
            }
            if (choixMidOffset < windowHeight && choixMidOffset > 0 && !aProposChoixVisible) {
                aProposChoixIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [aProposVisible, aProposExpertiseVisible, aProposChoixVisible]);

        useEffect(() => {
            const animateSequence = async () => {
                await aProposTitle.start({
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 }
                });
    
                await aProposTitle.start({
                    scale : 1,
                    transition : { duration : 0.3 }
                });
                await aProposDescription1.start({
                    opacity: 1,
                    y : 0,
                    transition: { duration: 1.5, }
                });
                await maPhoto.start({
                    opacity : 1,
                    x : 0,
                    transition : { duration : 0.5 }
                });
                await expertiseTitle.start({
                    opacity : 1,
                    transition : { duration : 0.5, delay : 0.5}
                });
                
                if (aProposExpertiseVisible) {
                    await expertiseImage.start({
                        x : 0,
                        transition : { duration : 0.5}
                    });
                    await aProposDescription2.start({
                        opacity: 1,
                        transition: { duration: 1, delay : 0.5 }
                    });
                }
    
                if (aProposChoixVisible) {
                    await logoImage.start({
                        x : 0,
                        transition : { duration : 0.7}
                    })
                    await aProposDescription3.start({
                        opacity: 1,
                        transition: { duration: 0.7, delay : 0.5
                         }
                    });
                }
            };
    
            animateSequence();
        }, [aProposTitle, aProposVisible, aProposExpertiseVisible, aProposChoixVisible, aProposDescription1, aProposDescription2, aProposDescription3]);
    
        return (
        <motion.section className='a_propos_section'>
            <section className='a_propos_de_moi'>
            <motion.h2 id='a_propos_title'
            animate={aProposTitle}
            initial={{opacity : 0, x : -500, scale : 0.5}}>À propos de moi et CodeMeta Solutions</motion.h2>
                <motion.section className='qui_suis_je'>
                    <motion.section  ref={aProposDeMoiRef}
                    animate={aProposDescription1}
                    initial={{ opacity: 0, y : -300 }} 
                    className='a_propos_description'>
                        <h3>Qui suis-je ?</h3>
                        <p>Je suis CARNEIRO MOREIRA Steven, un développeur web passionné et le fondateur de CodeMeta Solutions. Ce qui me fascine, c’est la façon dont les lignes de code
                             peuvent faire vivre une idée. J’ai donc créé CodeMeta Solutions pour réaliser des solutions web personnalisées et sur mesure pour mes clients. Je suis devenu
                              un indépendant pour me rapprocher de mes clients et donner vie à leurs idées sur un site web qui est à la fois esthétique, fonctionnel et performant.</p>
                    </motion.section>
                    <section className='a_propos_img'>
                        <motion.img animate={maPhoto}
                        initial ={{opacity : 0, x : 300}}
                        className='ma_photo' src='./ma_photo_profil.jpg'></motion.img>
                    </section>
                </motion.section>
                <motion.h2 id='a_propos_title'
                animate={expertiseTitle}
                initial = {{opacity : 0}}>Expertise et Valeurs</motion.h2>
                <motion.section className='expertise'>
                    <motion.section className='a_propos_description'
                    ref={aProposExpertiseRef}
                    animate={aProposDescription2}
                    initial={{ opacity: 0 }}>
                        <h3>Mon expertise et mon approche</h3>
                        <p>Ma spécialité est le développement front-end, travaillant avec HTML, CSS, JavaScript et des frameworks tels que Next.js et React. Mon objectif est de créer une
                             interface utilisateur qui allie esthétique, convivialité et hautes performances. En tant que développeur indépendant, je m’efforce de fournir des solutions de
                              haut niveau personnalisées en fonction de la demande. Ma méthode de travail est basée sur des réunions fréquentes, la communication et votre satisfaction tout
                               au long du processus. Dans un premier temps, je discute avec vous et j’étudie vos besoins, puis je choisis des solutions en vue de vous les proposer tout
                                en vous tenant informé au cours de toutes les étapes.</p>
                    </motion.section>
                    <section className='a_propos_img'>
                        <motion.img className='ma_photo'
                         src='./sur_mesure.jpg'
                         animate={expertiseImage}
                         initial = {{x : -300}}></motion.img>
                    </section>
                </motion.section>
                <h2 id='a_propos_title'>Pourquoi me choisir ?</h2>
                <motion.section className='me_choisir'>
                    <motion.section className='a_propos_description'
                    ref={aProposChoixRef}
                    animate={aProposDescription3}
                    initial={{ opacity: 0 }}>
                    <h3>Ce qui me différencie</h3>
                    <p>En travaillant avec moi, vous optez pour un partenaire qui s'investit dans votre projet. Mon expertise technique, et mon approche personnalisée, me permet de créer
                         des sites web efficaces et adaptés à vos besoins. J'ai eu le plaisir de créer des sites web et des applications qui répondent parfaitement à leurs besoins. Vous
                          pouvez consulter les témoignages de mes clients ainsi que quelques-unes de mes réalisations.<br></br>
                        Mes valeurs : Transparence, engagement, et satisfaction client.</p>
                        </motion.section>
                        <section className='a_propos_img'>
                        <motion.img className='mon_logo'
                         src='./codemeta_solutions.png'
                         animate = {logoImage}
                         initial={{x : 300}}></motion.img>
                    </section>
                </motion.section>
            </section>
        </motion.section>
    )
}

export default APropos
