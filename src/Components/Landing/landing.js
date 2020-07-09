import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerLanding, Section } from './landing_styles.js';

export default function LandingComponent() {
    return (
        <ContainerLanding>
            <Section>
                <Link to="/login">
                    <button className="button-landing">Login</button>
                </Link>
                <Link to="/signup">
                    <button>Cadastrar</button>
                </Link>
            </Section>
        </ContainerLanding>
    );
}
