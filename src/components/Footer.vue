<template>
    <footer>
        <p>&copy; 2025 Portfolio - Briac Villeneuve. Tous droits réservés.</p>
        <nav>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </footer>
</template>

<style>
a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    transition: all 0.3s ease;
}

a:hover {
    color: var(--color-secondary);
}

li {
    display: inline-block;
    margin-right: 20px;
    list-style: none;
}

footer {
    background-color: var(--color-primary);
    width: 100%;
    text-align: center;
    padding-bottom: 20px;

    border-top: 5px solid var(--color-secondary);
}
</style>