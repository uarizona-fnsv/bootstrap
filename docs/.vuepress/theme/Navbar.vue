<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-ash">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <router-link :to="$localePath" class="home-link">
      <img class="logo"
           v-if="$site.themeConfig.logo"
           :src="$withBase($site.themeConfig.logo)">
      <span class="site-name" v-if="$siteTitle">
        {{ $siteTitle }}
      </span>
    </router-link>
    <div class="navbar-content">
      <NavLinks class="navbar-content__main navbar-nav"/>
      <div class="navbar-content__secondary">
        <SearchBox />
        <a class="btn btn-outline-light" v-if="repoLink"
           :href="repoLink" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-gitlab mr-1" aria-hidden="true" />
          {{ repoLabel }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'

export default {
  components: {
    SidebarButton,
    NavLinks,
    SearchBox
  },
  computed: {
    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },
    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }
      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }
      return 'Source'
    }
  }
}

</script>

<style lang="scss" scoped>
@import './scss/config.scss';

a, span, img {
  display: inline-block;
}

.navbar {
  // line-height: $navbarHeight - 1.4rem;
  position: sticky;
  top: 0;
  z-index: 1050;
}

.logo {
  height: $navbarHeight - 1.4rem;
  min-width: $navbarHeight - 1.4rem;
  margin-right: 0.8rem;
  vertical-align: top;
}

.site-name {
  font-size: 1.5rem;
  font-weight: 400;
  color: $white;
  position: relative;
}

.navbar-content {
  margin-left: 1rem;
  font-size: 1rem;
  display: -ms-flexbox !important;
  display: flex !important;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;

  .navbar-content__main {
    margin-right: auto !important;
  }

  .navbar-content__secondary {

  }
}
</style>
