<template>
    <!-- Modal -->
    <div v-if="isOpen" class="modal fade2 show" id="campingModal" tabindex="-1" @click="closeModal">
        <div class="modal-dialog" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="campingModalLabel">
                        <slot name="header">
                            PEA
                        </slot>
                    </h1>
                    <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        KEHA
                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">{{closeButtonName}}</button>
                    <slot name="footer">
                        JA JALG
                    </slot>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'Modal',
    props: {
        closeButtonName: String
    },
    data(){
        return {
            isOpen: false
        }
    },
    methods: {
        openModal() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
        },
    }

}
</script>

<style scoped>
.fade2 {
    transform: scale(0.9);
    opacity: 0;
    transition: all .2s linear;
    display: block !important;
}

.fade2.show {
    opacity: 1;
    transform: scale(1);
}

</style>