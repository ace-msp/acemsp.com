<script lang="ts" setup>
import ScrollLink from './ScrollLink.vue'
</script>

<template>
  <div class="bg-background footer">
    <div class="section">
      <div class="flex-between flex-row">
        <div class="flex-full flex-stretch">
          <h3>Quick Links</h3>
          <div class="flex-column">
            <ScrollLink classes="txt-big" to="home">Home</ScrollLink>
            <ScrollLink classes="txt-big" to="services">Services</ScrollLink>
            <ScrollLink classes="txt-big" to="pricing">Pricing</ScrollLink>
            <ScrollLink classes="txt-big" to="contact">Contact Us</ScrollLink>
          </div>
        </div>
        <div class="flex-full flex-stretch">
          <h3>Social Media</h3>
          <div class="flex-gap flex-row">
            <a href="#" target="_blank"
              ><fa-icon class="txt-bigger" :icon="['fab', 'facebook']"
            /></a>
            <a href="#" target="_blank"
              ><fa-icon class="txt-bigger" :icon="['fab', 'instagram']"
            /></a>
            <a href="#" target="_blank"
              ><fa-icon class="txt-bigger" :icon="['fab', 'linkedin']"
            /></a>
            <a href="#" target="_blank"
              ><fa-icon class="txt-bigger" :icon="['fab', 'x-twitter']"
            /></a>
          </div>
        </div>
        <div class="flex-full flex-stretch">
          <h3>Contact Info</h3>
          <div class="flex-column flex-start">
            <a class="flex-center flex-row" href="tel:+14709201235">
              <fa-icon :icon="['fas', 'phone']" />
              <span class="txt-big">+1 (470) 920-1235</span>
            </a>
            <a class="flex-center flex-row" href="mailto:info@acemsp.com">
              <fa-icon :icon="['fas', 'envelope']" />
              <span class="txt-big">info@acemsp.com</span>
            </a>
            <a
              class="flex-center flex-row"
              href="https://maps.app.goo.gl/NfkGKGhRqfuNfvBaA"
              target="_blank"
            >
              <fa-icon :icon="['fas', 'map']" />
              <span class="txt-big">Whitesboro, TX 76273</span>
            </a>
          </div>
        </div>
      </div>
      <div class="flex-column">
        <div class="copyright txt-center">
          <div class="txt-big">&copy; {{ new Date().getFullYear() }} Ace MSP, LLC</div>
          <div class="">ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  a svg {
    margin-right: 0.25em;
  }

  .copyright {
    border-top: 1px solid $primary;
    font-size: 0.8em;
    margin-top: 3em;
    padding-top: 3em;
  }

  @media screen and (max-width: $sm) {
    .flex {
      &-column,
      &-row {
        align-items: center;
        text-align: center;

        a {
          margin-bottom: 1em;
        }
      }
    }
  }
}
</style>
