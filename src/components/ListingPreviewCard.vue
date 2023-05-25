<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="listing in listingsPreview" :key="listing.listingId" class="col px-3">
            <div class="card px-4">
                <img src="../assets/logoTelk.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-start mb-4">{{listing.listingName}}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text text-start">{{ listing.averageScore }}
                            <font-awesome-icon :icon="['fass', 'star']"/>
                            ({{ listing.numberOfScores }})
                        </p>
                        <p class="text-end">{{ listing.price }}€ /öö</p>
                    </div>
                    <a href="#" class="stretched-link"></a>
                    <!--Buttons -->
                    <div v-if="showButtons === true" class="row mb-3 mt-3 justify-content-center">
                        <div class="col col-6">
                            <button @click="editContact" type="button" class="btn btn-dark">Muuda</button>
                        </div>
                        <div class="col col-6">
                            <button @click="editContact" type="button" class="btn btn-dark">Kustuta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListingPreviewCard',
    props: {
        listingsPreview: {},
        showButtons: false,
    }
}
</script>
<style scoped>
.card-title {
    height: 2.5rem;
}

</style>