<template>
    <div>
        <div class="example">
            <slot></slot>
        </div>
        <!-- <div class="example-code">
                <pre>
                    <code class="language-html">
                        {{ code }}
                    </code>
                </pre>
        </div> -->
    </div>
</template>

<script>
// import Prism from 'prismjs';

export default {
    // computed: {
    //     code () {
    //         return '';
    //         // return this.$slots.default;
    //     }
    // },
    // mounted () {
    //     this.$nextTick(() => {
    //         Prism.highlightAll();
    //     });
    // }

}
</script>

<style scoped>
.example {
    position: relative;
    padding: 1rem;
    margin: 1rem -15px 0;
    margin-right: -15px;
    margin-left: -15px;
    border: solid #f8f9fa;
    border-top-width: medium;
    border-right-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
    border-width: .2rem 0 0;
}

.bd-example::after {
    display: block;
    clear: both;
    content: "";
}

@media screen and (min-width: 576px) {
    .example {
        padding: 1.5rem;
        margin-right: 0;
        margin-left: 0;
        border-width: .2rem;
    }
}
</style>
