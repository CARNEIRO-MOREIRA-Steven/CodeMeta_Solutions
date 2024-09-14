"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./services_page.css";

// Function to handle section animations
const useAnimateSection = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionAnimation = useAnimation();
    const descriptionAnimation = useAnimation();
    const imageAnimation = useAnimation();

    useEffect(() => {
        const topOffset = ref.current?.offsetTop;

        const handleScroll = () => {
            if (window.scrollY > topOffset - window.innerHeight / 1.5) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ref]);

    useEffect(() => {
        const animate = async () => {
            if (isVisible) {
                await sectionAnimation.start({ opacity: 1 });
                await imageAnimation.start({ scale: 1, transition: { duration: 0.5, delay: 0.3 } });
                await descriptionAnimation.start({ opacity: 1, x: 0, transition: { duration: 1 } });
            }
        };
        animate();
    }, [isVisible, sectionAnimation, descriptionAnimation, imageAnimation]);

    return { sectionAnimation, descriptionAnimation, imageAnimation };
};

const ServicesDescription = () => {
    const vitrineRef = useRef(null);
    const eComRef = useRef(null);
    const portfolioRef = useRef(null);
    const reservationRef = useRef(null);
    const surMesureRef = useRef(null);
    const autresServicesRef = useRef(null);

    const vitrineAnimations = useAnimateSection(vitrineRef);
    const eComAnimations = useAnimateSection(eComRef);
    const portfolioAnimations = useAnimateSection(portfolioRef);
    const reservationAnimations = useAnimateSection(reservationRef);
    const surMesureAnimations = useAnimateSection(surMesureRef);
    const autresServicesAnimations = useAnimateSection(autresServicesRef);

    return (
        <section className="container_services">
            <motion.section ref={vitrineRef}
                animate={vitrineAnimations.sectionAnimation}
                initial={{ opacity: 0 }} className='service' id="site-vitrine">
                <section className='service_description'>
                    <h2>Site Vitrine</h2>
                    <motion.section animate={vitrineAnimations.descriptionAnimation}
                        initial={{ opacity: 0, x: 800 }}>
                        <p>Un site vitrine est conçu pour présenter votre entreprise et vos services de manière professionnelle.</p>
                        <ul>
                            <li>Présentation de l'entreprise</li>
                            <li>Formulaire de contact</li>
                            <li>Section blog pour les actualités</li>
                        </ul>
                        <p>À partir de <strong>800€</strong></p>
                    </motion.section>
                </section>
                <motion.img animate={vitrineAnimations.imageAnimation}
                    initial={{ scale: 0 }}
                    className='service_image' src="vitrine.jpg" alt="Exemple de Site Vitrine" />
            </motion.section>

            <motion.section ref={eComRef} animate={eComAnimations.sectionAnimation} initial={{ opacity: 0 }} className='service' id="site-e-commerce">
                <section className='service_description'>
                    <h2>Site E-commerce</h2>
                    <motion.section animate={eComAnimations.descriptionAnimation}
                        initial={{ opacity: 0, x: -800 }}>
                        <p>Un site e-commerce vous permet de vendre vos produits en ligne.</p>
                        <ul>
                            <li>Gestion de catalogue produit</li>
                            <li>Options de paiement en ligne</li>
                            <li>Gestion des commandes et livraisons</li>
                        </ul>
                        <p>À partir de <strong>1000€</strong></p>
                    </motion.section>
                </section>
                <motion.img animate={eComAnimations.imageAnimation} initial={{ scale: 0 }} className='service_image' src="e_commerce.jpg" alt="Exemple de Site Vitrine" />
            </motion.section>

            <motion.section ref={portfolioRef}
                animate={portfolioAnimations.sectionAnimation}
                initial={{ opacity: 0 }} className='service' id="portfolio-professionnel">
                <section className='service_description'>
                    <h2>Portfolio Professionnel</h2>
                    <motion.section animate={portfolioAnimations.descriptionAnimation}
                        initial={{ opacity: 0, x: 800 }}>
                        <p>Un portfolio professionnel met en valeur vos réalisations.</p>
                        <ul>
                            <li>Galeries d'images et vidéos</li>
                            <li>Témoignages clients</li>
                            <li>Section "À propos"</li>
                        </ul>
                        <p>À partir de <strong>800€</strong></p>
                    </motion.section>
                </section>
                <motion.img animate={portfolioAnimations.imageAnimation} initial={{ scale: 0 }} className='service_image' src="portfolio_pro.jpg" alt="Exemple de Site Vitrine" />
            </motion.section>

            <motion.section ref={reservationRef}
                animate={reservationAnimations.sectionAnimation}
                initial={{ opacity: 0 }} className='service' id="site-de-réservation-de-services">
                <section className='service_description'>
                    <h2>Site de Réservation de Services</h2>
                    <motion.section animate={reservationAnimations.descriptionAnimation}
                        initial={{ opacity: 0, x: -800 }}>
                        <p>Un site de réservation de services facilite la gestion des rendez-vous en ligne.</p>
                        <ul>
                            <li>Calendrier de réservation en ligne</li>
                            <li>Système de paiement sécurisé</li>
                            <li>Notifications automatiques</li>
                        </ul>
                        <p>À partir de <strong>1500€</strong></p>
                    </motion.section>
                </section>
                <motion.img animate={reservationAnimations.imageAnimation}
                    initial={{ scale: 0 }}
                    className='service_image' src="reservation.jpg" alt="Exemple de Site Vitrine" />
            </motion.section>
            <motion.section ref={surMesureRef} animate={surMesureAnimations.sectionAnimation} initial={{ opacity: 0 }} className='service' id="site-sur-mesure">
                <section className='service_description'>
                    <h2>Site sur Mesure</h2>
                    <motion.section animate={surMesureAnimations.descriptionAnimation}
                        initial={{ opacity: 0, x: 800 }}>
                        <p>
                            Un site sur mesure est entièrement personnalisé pour répondre à vos besoins spécifiques et uniques. Idéal pour les projets complexes nécessitant des fonctionnalités particulières et une personnalisation avancée.
                        </p>
                        <ul>
                            <li>Design et fonctionnalités personnalisées</li>
                            <li>Intégration de systèmes tiers (CRM, ERP, etc.)</li>
                            <li>Développement de fonctionnalités spécifiques</li>
                        </ul>
                        <p>À partir de <strong>1500€</strong></p>
                    </motion.section>
                </section>
                <motion.img animate={surMesureAnimations.imageAnimation} initial={{ scale: 0 }} className='service_image' src="sur_mesure.jpg" alt="Exemple de Site sur Mesure" />
            </motion.section>
            <motion.section ref={autresServicesRef} animate={autresServicesAnimations.sectionAnimation} initial={{ opacity: 0 }} className='service' id="services-supplementaires">
                <section className='service_description'>
                    <h2>Autres Services</h2>
                    <motion.section animate={autresServicesAnimations.descriptionAnimation} initial={{ opacity: 0, x: -800 }}>
                        <p>En plus de la création de sites web, nous offrons également :</p>
                        <ul>
                            <li>Conception de maquettes sur mesure</li>
                            <li>Gestion de l'hébergement et du nom de domaine</li>
                            <li>Maintenance et mise à jour régulière du site</li>
                        </ul>
                    </motion.section>
                </section>
                <motion.img animate={autresServicesAnimations.imageAnimation} initial={{ scale: 0 }} className='service_image' src="pexels-tranmautritam-326515.jpg" alt="Autres Services" />
            </motion.section>
        </section>
    );
};

export default ServicesDescription;
