---
title: 'University of Arizona Branding Colors'
description: 'These docs introduce the UA color palatte as well as our FSO Bootstrap Palatte (a subset of the UA branding colors with some additional options), as well as the many utilities available to implement these colors.'
bootstrapLink: ''

primary: [
  { name: 'Bloom', color: 'bloom', hex: '#ef4056' },
  { name: 'UA Red', color: 'uared', hex: '#ab0520' },
  { name: 'Chili', color: 'chili', hex: '#8b0015' },
  { name: 'Sky', color: 'sky', hex: '#81d3eb' },
  { name: 'Oasis', color: 'oasis', hex: '#378dbd' },
  { name: 'Azurite', color: 'azurite', hex: '#1e5288' },
  { name: 'Arizona Blue', color: 'arizonablue', hex: '#0c234b' },
  { name: 'Midnight', color: 'midnight', hex: '#001c48' }
]

secondary: [
  { name: 'Leaf', color: 'leaf', hex: '#70b865' },
  { name: 'River', color: 'river', hex: '#007d84' },
  { name: 'Silver', color: 'silver', hex: '#9eabae' },
  { name: 'Mesa', color: 'mesa', hex: '#a95c42' },
  { name: 'Sand*', color: 'sand', hex: '#f19e1f' }
]

neutral: [
  { name: 'Cool Gray', color: 'coolgray', hex: '#e2e9eb' },
  { name: 'Warm Gray', color: 'warmgray', hex: '#f4ede5' }
]

legacy: [
  { name: 'Ash', color: 'ash', hex: '#403635' },
  { name: 'Sage', color: 'sage', hex: '#4a634e' },
  { name: 'Silver', color: 'silver', hex: '#9eabae' },
  { name: 'Dark Silver', color: 'darksilver', hex: '#49595e' },
  { name: 'Copper', color: 'copper', hex: '#a95c42' }
]
---

These colors are pulled from the [UA branding guidelines](https://brand.arizona.edu/ua-color-palette). The UA color palatte is expansive and all the colors listed below are available for use via our [text](#text-color) and [background](#background-color) utilites (examples will be shown below). However, only a small subset of these colors are available for use in components throughout FSO Bootstrap. FSO Bootstrap simplifies the number of colors to streamline the brand further and uses more developer-friendly terms such as `primary`, `accent`, etc.

## Primary Colors

UA Red and Arizona Blue are the universities primary colors.

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div class="m-2 p-2 d-flex flex-column justify-content-center bg-uared text-light"
       style="width:300px; height:300px; text-align:center;">
    <p class="h5">UA Red</p>
    <p>#ab0520</p>
  </div>
  <div class="m-2 p-2 d-flex flex-column justify-content-center bg-arizonablue text-light"
       style="width:300px; height:300px; text-align:center;">
    <p class="h5">Arizona Blue</p>
    <p>#0c234b</p>
  </div>
</div>

Both colors have shaded options to complement them.

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div v-for="color in $page.frontmatter.primary" :key="color.color"
       class="m-2 p-2 d-flex flex-column justify-content-center"
       :class="['bg-' + color.color, color.color == 'light' ? 'text-dark' : 'text-light' ]"
       style="width:200px; height:200px; text-align:center;">
    <p class="h5">{{ color.name }}</p>
    <p>{{ color.hex }}</p>
  </div>
</div>

FSO-Bootstrap treats Azurite as the primary color since Arizona Blue is difficult to distinguish from black in smaller UI elements. However, when backgrounds are large, Arizona Blue is preferred. UA Red is treated as an accent color since it is aggressive, however, it can compliment or replace the blues when necessary.

Generally, these colors should be used to signify main interactive options. I.e., the main button a user will use in an application, a selected row in a list, etc.

## Secondary Colors

The secondary colors are meant to represent things about the Tucson environment. These should generally be avoided in FSO applications and used only for specialized purposes. Mesa, in particular, is a difficult color to use with the rest of the palatte.

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div v-for="color in $page.frontmatter.secondary" :key="color.color"
       class="m-2 p-2 d-flex flex-column justify-content-center"
       :class="['bg-' + color.color, color.color == 'light' ? 'text-dark' : 'text-light' ]"
       style="width:200px; height:200px; text-align:center;">
    <p class="h5">{{ color.name }}</p>
    <p>{{ color.hex }}</p>
  </div>
</div>

<small> \* Sand is officially no longer a part of the UA Branding scheme, however, it is still included by FSO Bootstrap since we use it for our warning coloring scheme. Avoid using it for anything other than a warning visual state.</small> 

## Neutral Colors

The neutral colors work for larger open spaces that need a non-white background. They should generally be avoided as the primary background of a web page. Cool Gray is particularly well-suited for element chrome, such as a header for an accordian section, modal, or card.

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div v-for="color in $page.frontmatter.neutral" :key="color.color"
       class="m-2 p-2 d-flex flex-column justify-content-center"
       :class="['bg-' + color.color, 'text-dark']"
       style="width:200px; height:200px; text-align:center;">
    <p class="h5">{{ color.name }}</p>
    <p>{{ color.hex }}</p>
  </div>
</div>

## Legacy Colors

Sage, Ash, and Silver are the original colors for the university. Generally, these should only be used for Administration pages or documentation sites (because, why not?).

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div v-for="color in $page.frontmatter.legacy" :key="color.color"
       class="m-2 p-2 d-flex flex-column justify-content-center"
       :class="['bg-' + color.color, color.color == 'light' ? 'text-dark' : 'text-light' ]"
       style="width:200px; height:200px; text-align:center;">
    <p class="h5">{{ color.name }}</p>
    <p>{{ color.hex }}</p>
  </div>
</div>

<small>Note that Silver and Copper both exist outside of the Legacy palatte (Copper is the same as Mesa)</small>
