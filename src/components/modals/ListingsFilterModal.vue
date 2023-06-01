<template>
    <modal ref="modalRef" close-button-name="Tühista">
        <template #header>
            Soovid otsingut täpsustada:
        </template>
        <template #body>
            <div class="mb-3 text-start">
                <label for="dropdownMenuButton" class="form-label">Vali maakond:</label>
                <div class="dropdown">
                <br>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {{ filterParameters.locationCountyId === 0 ? 'Kõik maakonnad' : countyNameFront }}
                </button>
                <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton">
                    <li @click="filterParameters.locationCountyId = county.countyId; countyNameFront = county.countyName"
                        v-for="county in counties">
                        <a class="dropdown-item" href="#">{{ county.countyName }}</a>
                    </li>
                </ul>
                </div>
            </div>

        </template>
        <template #footer>
            <button @click="executeFilter" type="button" class="btn btn-primary">Kinnita</button>
        </template>
    </modal>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
import router from "@/router";

export default {
    name: "ListingsFilterModal",
    components: {Modal},
    data() {
        return {
            message: '',
            countyNameFront: '',
            counties:
                [
                    {
                        countyId: 0,
                        countyName: ''
                    }
                ],
            // features:
            //     [
            //         {
            //             id: 0,
            //             featureName: '',
            //             featureIsSelected: false
            //         }
            //     ],
            filterParameters: {
                locationCountyId: 0,
                // features: [
                //     {
                //         featureId: 0,
                //         featureName: '',
                //         featureIsSelected: true
                //     }
                // ]
            },
        }
    },
    methods: {
        executeFilter() {
            if (this.filterParameters.locationCountyId === 0) {
                this.$refs.modalRef.closeModal()
            } else {
                this.$emit('event-filter-listings', this.filterParameters.locationCountyId)
                this.$refs.modalRef.closeModal()
            }
        },

        getFeatures() {
            this.$http.get("/add-listing-features")
                .then(response => {
                    this.features = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },

        getCounties() {
            this.$http.get("/add-listing-counties")
                .then(response => {
                    this.counties = response.data
                })
                .catch(error => {
                    router.push({name: 'errorRoute'})
                })
        },
    },
    mounted() {
        this.getFeatures()
        this.getCounties()
    }
}
</script>

<style scoped>

</style>