import React from 'react';
import "../App.css";
export default function Footer(props) {
    return (
    <footer>
        <section>
            <p>{window.Date()}</p>
        </section>
        <section>
            <p>Leevi Kukkonen</p>
        </section>
    </footer>
    );
}