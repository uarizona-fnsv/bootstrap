<script>
export default {
    render (h) {
        return h('div', { class: 'example'}, [
            h('div', { class: 'example-render' }, [
                this.$slots.default
            ]),
            // h('div', { class: 'example-code'}, [
            //     h('pre', [
            //         h('code', [
            //             this.code
            //         ])
            //     ])
            // ])
        ])
    }

};
</script>

<style lang="scss" scoped>

.example {
    position: relative;
    // padding: 1rem;
    margin: 1rem -15px;
    margin-right: -15px;
    margin-left: -15px;
    border: solid #f8f9fa;
    border-top-width: medium;
    border-right-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
    border-width: .2rem 0 0;

    @media screen and (min-width: 576px) {
        // padding: 1.5rem;
        margin-right: 0;
        margin-left: 0;
        border-width: .2rem;
    }

    .example-render {
        margin: 1rem;
    }

    .example-code {
        background-color: #f8f9fa;

        pre {
            margin-bottom: 0;
        }
    }
}

// .bd-example::after {
//     display: block;
//     clear: both;
//     content: "";
// }


</style>
