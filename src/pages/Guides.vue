<template>

    <Layout>
        <div>
            <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col">
                        <h1>Guides pratiques</h1>
                    </div>
                </div>

                <div class="rf-grid-row rf-grid-row--gutters">

                    <div class="rf-col-12 rf-col-md-4" v-for="(edge, index) in incomingEvents" :key="edge.node.id" >
                         <a class="rf-card" :href="edge.node.lien">
                            <div class="rf-card__img" :style="{ 'background-image': 'url(' + edge.node.illustration[0].url + ')'}">
                            </div>
                            <div class="rf-card__body">
                                <h2 class="rf-card__title">{{ edge.node.titre }}</h2>
                                <p class="rf-card__desc">{{ edge.node.description }}</p>
                            </div>
                         </a>
                    </div>
                </div>

            </div>
        </div>
  </Layout>
</template>

<page-query>
query Events {
    events: allGuide {
        edges {
            node {
                titre
                description
                lien
                illustration {
                    url
                }
            }
        }
    }
}
</page-query>


<script>

import moment from 'moment'

export default {
    metaInfo: {
        title: 'Guides',
    },

    computed: {
        incomingEvents: function () {
            return this.$page.events.edges
                .filter(event => moment(event.node.debut) >= moment())
                .sort(function (a,b) { return  moment(a.node.debut) > moment(b.node.debut)} );

        },
        pastEvents: function () {
           return this.$page.events.edges
                .filter(event => moment(event.node.debut) <= moment())
                .sort(function (a,b) { return  moment(a.node.debut) < moment(b.node.debut)} );
        }
    },

    filters: {
        formatDate: function(value) {
            moment.locale('fr')
            return moment(value).format("LL");
        },
    }
};
</script>


<style lang="scss">

    a {
        box-shadow: none;
    }

    .rf-card {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #EEE !important;
    }

    .rf-card__img {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom center;

        text-align:center;

        &:before {
            padding-bottom: 70%;
        }
    }



</style>

