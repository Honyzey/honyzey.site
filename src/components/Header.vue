<template>

<header>
    <nav>
        <ul>
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
    text-align: center;
    border-radius: 10px;

    border-color: var(--color-secondary);
    border-width: 2px;
    border-style: solid;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>