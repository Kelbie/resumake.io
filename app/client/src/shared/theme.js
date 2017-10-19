/**
 * @flow
 */

import { lighten } from 'polished'

const colors = {
  primary: '#2b303b',
  accent: lighten(0.1, '#2b303b'),
  borders: '#ddd'
}

const sizes = {
  header: '11vh',
  sideNav: '20vw'
}

const styles = {
  gradient: `linear-gradient(to right, #111, ${colors.primary}, #111)`
}

export { colors, sizes, styles }
