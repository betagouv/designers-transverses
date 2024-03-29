<template>
  <Layout>
    <div>
      <section
        class="hero"
        :style="{ 'background-image': 'url(./images/home.svg)' }"
      >
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <div class="promise">
                <h1>Votre service numérique a besoin de design !</h1>
                <p>
                  L'équipe de Designers Transverses est là pour vous aider à
                  concevoir des services publics numériques accessibles et
                  simples d'usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Check-up</h2>
                <p class="fr-card__desc">
                  Une heure avec deux designers pour parler de votre produit,
                  répondre à vos questions, et identifier des pistes
                  d'amélioration pour vos usagers.
                </p>
                <div class="call-to-action">
                  <a
                    href="https://airtable.com/shrhbALSi4MptguEA"
                    aria-label="'Réserver un check-up (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >Réserver une session</a
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{
                  'background-image': 'url(./images/docteur-design.svg)',
                }"
              ></div>
            </div>
          </div>

          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Accompagnement</h2>
                <p class="fr-card__desc">
                  Pour être accompagné pour une problématique spécifique :
                  organisation d'atelier, recherche utilisateur, conseil UX...
                </p>
                <div class="call-to-action">
                  <a
                    href="https://airtable.com/shr6ASfxJDIz0RLhR"
                    aria-label="'Demander de l'aide (nouvel onglet)'"
                    target="_blank"
                    class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                    >Demander de l'aide</a
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{ 'background-image': 'url(./images/designers.svg)' }"
              ></div>
            </div>
          </div>

          <div class="fr-col-12 fr-col-md-4">
            <div class="fr-card fr-card--no-arrow">
              <div class="fr-card__body">
                <h2 class="fr-card__title">Formation</h2>
                <p class="fr-card__desc">
                  Des formations et guides pratiques pour vous aider tout au
                  long d'évolution de votre produit.
                </p>
                <div class="call-to-action">
                  <g-link to="/guides/" class="fr-btn fr-btn--sm"
                    >Découvrir nos guides</g-link
                  >
                </div>
              </div>
              <div
                class="fr-card__img"
                :style="{ 'background-image': 'url(./images/guides.svg)' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <section class="designers">
        <div class="fr-container">
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <h1>Pour les designers de la communauté</h1>
            </div>
          </div>

          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">Vous venez d'arriver ?</h2>
                  <p class="fr-card__desc">
                    Bienvenue, faisons connaissance ! Vous avez probablement des
                    questions :)
                  </p>
                  <div class="call-to-action">
                    <a
                      href="https://mattermost.incubateur.net/betagouv/channels/domaine-design"
                      aria-label="'Venez dire bonjour (nouvelle fenêtre)'"
                      target="_blank"
                      class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                      >Se présenter</a
                    >
                  </div>
                </div>
                <figure
                  class="illustration"
                  :style="{ 'background-image': 'url(./images/welcome.svg)' }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">Échangez entre designers</h2>
                  <p class="fr-card__desc">
                    Partagez votre travail, demandez conseil ou organisez du
                    pair design.
                  </p>
                  <div class="call-to-action">
                    <a
                      href="https://mattermost.incubateur.net/betagouv/channels/domaine-design"
                      aria-label="'Rejoindre la communauté (nouvelle fenêtre)'"
                      target="_blank"
                      class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                      >Rejoindre la communauté</a
                    >
                  </div>
                </div>
                <figure
                  class="illustration"
                  :style="{ 'background-image': 'url(./images/interview.svg)' }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">Besoin de ressources ?</h2>
                  <p class="fr-card__desc">
                    Parcourez la documentation sur les outils : design system,
                    TestApic, etc.
                  </p>
                  <div class="call-to-action">
                    <a
                      href="https://doc.incubateur.net/design/"
                      aria-label="'Voir la documentation (nouvelle fenêtre)'"
                      target="_blank"
                      class="fr-btn fr-btn--sm fr-fi-external-link-line fr-btn--icon-right"
                      >Voir la documentation</a
                    >
                  </div>
                </div>
                <figure
                  class="illustration"
                  :style="{
                    'background-image': 'url(./images/documentation.svg)',
                  }"
                ></figure>
              </div>
            </div>

            <div class="fr-col-12 fr-col-md-3">
              <div class="fr-card fr-card--no-arrow">
                <div class="fr-card__body">
                  <h2 class="fr-card__title">Participez aux cafés designers</h2>
                  <p class="fr-card__desc">
                    Rencontrez des collègues pour échanger sur notre pratique et
                    nos expériences.
                  </p>
                  <div class="call-to-action">
                    <a href="/events" class="fr-btn fr-btn--sm"
                      >Voir les évènements</a
                    >
                  </div>
                </div>
                <figure
                  class="illustration"
                  :style="{
                    'background-image': 'url(./images/cafe-designers.svg)',
                  }"
                ></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col">
            <h1>Nos évènements à venir</h1>
          </div>
        </div>

        <div class="fr-grid-row fr-grid-row--gutters">
          <div
            class="fr-col-12 fr-col-md-3"
            v-for="(edge, index) in incomingEvents"
            :key="edge.node.id"
          >
            <EventCard :event="edge.node" />
          </div>
        </div>

        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12">
            <div class="action all-events">
              <g-link to="/events/" class="fr-btn fr-btn--md"
                >Voir tous les évènements</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Events {
    events: allEvent(sortBy: "date", order: ASC) {
      edges {
        node {
          id
          titre
          pour
          date
          inscription
          compteRendu
          type {
            name
            pour
            illustration {
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import moment from "moment";
import EventCard from "~/components/EventCard.vue";
moment.updateLocale("fr", {});

export default {
  metaInfo: {
    title: "Du design pour votre Startup d'État",
  },

  components: {
    EventCard,
  },

  computed: {
    incomingEvents: function () {
      return this.$page.events.edges
        .filter((event) => moment(event.node.date) >= moment().startOf("day"))
        .sort((a, b) => moment(a.node.date) - moment(b.node.date))
        .slice(0, 4);
    },
  },
};
</script>

<style lang="scss">
.hero {
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -4em;

  //background: url('');
  background-size: cover;

  .promise {
    background: rgba(#fff, 1);
    padding: 2em;
    max-width: 55em;
    margin: auto;
    //max-width: 700px;
    //border: 1px solid #EDEDED;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    margin: auto;
    max-width: 45em;
    line-height: 1.5;
  }
}

.designers .fr-card {
  background: none;
}

.action.all-events {
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  display: block;
  //border-radius: 200px;
  overflow: hidden;

  width: 60%;
  padding-bottom: 60%;
  margin: 0 20%;

  background-size: cover;
  background-position: center center;
}

section.designers {
  padding: 0 0 2em;
  position: relative;
  margin: 3em 0;
}

section.designers {
  background: #fff;
  margin-bottom: 3em;
}

section.designers:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  top: -3em;
  left: 0;
}

section.designers:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3em;
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0) 49%,
    #fff 50%
  );
  bottom: -3em;
  left: 0;
}
</style>
