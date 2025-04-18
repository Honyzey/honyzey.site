<template>
    <div class="modal" v-if="visible">
        <div class="modal-content">
            <span class="close" @click="close">&times;</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #102B3F;
    margin: auto;
    padding: 20px;
    border: 1px solid #A6A6A8;
    border-radius: 10px;
    width: 80%;
}

.close {
    color: #E8E9F3;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>