<template>

    <header>
        <h1>Portfolio - Briac Villeneuve</h1>
        <nav>
            <ul>
                <li><a href="#acceuil">Acceuil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

</template>

<style scoped>
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

header {
    background-color: var(--color-primary);
    padding: 20px;
    width: 90%;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 10px;

    border-color: var(--color-secondary);
    border-width: 2px;
    border-style: solid;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);

    /* Ajout de Flexbox */
    display: flex;
    align-items: center;
    position: relative;
    /* Nécessaire pour positionner le nav */
}

h1 {
    margin: 0;
    text-align: left;
}

nav {
    position: absolute;
    /* Permet de positionner indépendamment du flux */
    left: 50%;
    /* Centre horizontalement */
    transform: translateX(-50%);
    /* Ajuste pour centrer parfaitement */
    text-align: center;
}

ul {
    padding: 0;
    margin: 0;
    display: inline-block;
    /* Permet de centrer les éléments dans le nav */
}
</style>