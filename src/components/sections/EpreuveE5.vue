<template>
    <section id="epreuve">
        <h1>Preuve Epreuve E5</h1>
        <a href="https://www.canva.com/design/DAGkOL8c5mg/8nuvC9LZYiINH9EgujZDew/edit?utm_content=DAGkOL8c5mg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank">Lien
            vers le diaporama<br></a>

        <a href="#" @click.prevent="showModal = true">Lien vers les preuves</a>

        <Modal :visible="showModal" @close="showModal = false" class="modal">
            <h2>Preuves Epreuve E5</h2>

            <details>
                <summary style="cursor: pointer">Certification PIX</summary>
                <div class="pdf-container">
                    <embed src="/preuveE5/pix.pdf" type="application/pdf" width="100%" height="600px" />
                </div>
            </details>

            <details>
                <summary style="cursor: pointer">Projet Trace GPS</summary>

                <a href="https://github.com/Honyzey/applicationWebMobile-TraceGPS" target="_blank">Lien vers le
                    github</a>

                <h3>Page d'acceuil de traceGPS</h3>
                <img src="/preuveE5/acceuiltracegps.png" width="70%" height="70%" />

                <h3>Mise en place de sécurité des mots de passe</h3>
                <img src="/preuveE5/secumdp.png" width="70%" height="70%" />

                <h3>Page d'acceuil une fois connecter</h3>
                <img src="/preuveE5/AcceuilCompte.png" width="70%" height="70%" />

            </details>

            <details>
                <summary style="cursor: pointer">Certification</summary>
                <img class="certif" src="/preuveE5/certificationOpenClassroom.png" width="50%" height="50%" />
            </details>

            <details>
                <summary style="cursor: pointer">Projet LeCoinDLS</summary>
                <a href="https://lecoindls.site" target="_blank">Lien vers LeCoinDLS</a>
            </details>

            <details>
                <summary style="cursor: pointer">Stage Jean Paul II</summary>
                <a href="https://github.com/Honyzey/triClasseV4" target="_blank">Lien vers le github du projet de
                    stage</a>
                <a href="https://tricls.honyzey.site" target="_blank">Lien vers la preview du projet</a>
            </details>

        </Modal>
    </section>
</template>

<script>
import Modal from '../../components/utils/Modal.vue';

export default {
    components: {
        Modal,
    },
    data() {
        return {
            showModal: false,
        };
    },
}
</script>

<style scoped>
summary {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 0;
    margin-bottom: 10px;
}

details {
    margin-bottom: 25px;
}

.pdf-container {
    margin: 20px 0;
}

/* Style pour centrer l'image de certification */
.modal img {
    margin-left: auto;
    margin-right: auto;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 15px 0;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal a {
    color: #4ECDC4;
    text-decoration: none;
    display: block;
    margin: 5px 0;
}

.modal a:hover {
    text-decoration: underline;
}

/* Ajustement pour les sections PDF */
.pdf-container embed {
    width: 100%;
    height: 500px;
    border-radius: 6px;
    margin: 10px 0;
}

/* Style pour le titre principal dans le modal */
h3 {
    margin-bottom: 25px;
    font-size: 24px;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
}
</style>