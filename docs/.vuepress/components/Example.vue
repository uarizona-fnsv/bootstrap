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
  // padding: 0.5rem;
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
    // padding: 0.75rem;
    margin-right: 0;
    margin-left: 0;
    border-width: .2rem;
  }

  .example-render {
    margin: 1rem;

    + p {
      margin-top: 2rem;
    }

    > .form-control {
      + .form-control {
        margin-top: .5rem;
      }
    }

    > .nav + .nav,
    > .alert + .alert,
    > .navbar + .navbar,
    > .progress + .progress,
    > .progress + .btn {
      margin-top: 1rem;
    }

    > .dropdown-menu:first-child {
      position: static;
      display: block;
    }

    > .form-group:last-child {
      margin-bottom: 0;
    }

    > .close {
      float: none;
    }

    > .btn-group {
      margin-top: .25rem;
      margin-bottom: .25rem;
    }

    > .btn-toolbar + .btn-toolbar {
      margin-top: .5rem;
    }

    // .input-group {
    //     margin-bottom: .5rem;
    // }

    > textarea.form-control {
      resize: vertical;
    }

    > .list-group {
      max-width: 400px;
    }

    .fixed-top,
    .sticky-top {
      position: static;
      margin: -1rem -1rem 1rem;
    }

    .fixed-bottom {
        position: static;
        margin: 1rem -1rem -1rem;
    }

    @media screen and (min-width: 576px) {
      .fixed-top,
      .sticky-top {
        margin: -1.5rem -1.5rem 1rem;
      }
      .fixed-bottom {
        margin: 1rem -1.5rem -1.5rem;
      }
    }

    .pagination {
      margin-top: .5rem;
      margin-bottom: .5rem;
    }
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
