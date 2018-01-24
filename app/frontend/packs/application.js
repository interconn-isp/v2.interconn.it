/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/frontend and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Rails from 'rails-ujs'
import Turbolinks from 'turbolinks/dist/turbolinks'
import 'bootstrap-sass/assets/javascripts/bootstrap'

import '../styles/styles'

import ContentToggle from '../components/content_toggle'
import Switch from '../components/switch'
import Tooltip from '../components/tooltip'

Rails.start()
Turbolinks.start()

ContentToggle.start()
Switch.start()
Tooltip.start()