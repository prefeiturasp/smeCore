import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="card text-center bg-footer">
                <div className="card-body mt-5 mb-5">
                    <img src="/img/Logotipo_PrefeituraSP_BRANCO.svg" alt="Footer logo" />
                    <p className="card-text mt-4">
                        SME-SP - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        );
    }
}