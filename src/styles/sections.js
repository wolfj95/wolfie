import { css } from '@emotion/react'

const teachingClassColor = '#ff595e'
const programmingClassColor = '#8ac926'
const researchClassColor = '#1982c4'
const etcClassColor = '#6a4c93'
//red: ff595e
//yellow: ffca3a
//green: 8ac926
//blue: 1982c4
//purple: 6a4c93

export const teachingClass = css({
  '&.nav-link,&.item-header': {
    backgroundColor: teachingClassColor,
    color: 'white',
    transition: 'background-color 0.5s, color 0.5s',
  },
  '&.speech-link': {
    textDecoration: 'underline wavy ' + teachingClassColor,
    textDecorationThickness: '5%',
    transition: 'background-color 0.2s, color 0.2s, text-decoration 0.2s',
    '&:hover': {
      backgroundColor: teachingClassColor,
      color: 'white',
      textDecoration: 'none'
    }
  }
})

export const programmingClass = css({
  '&.nav-link,&.item-header': {
    backgroundColor: programmingClassColor,
    color: 'white',
    transition: 'background-color 0.5s, color 0.5s',
  },
  '&.speech-link': {
    textDecoration: 'underline wavy ' + programmingClassColor,
    textDecorationThickness: '5%',
    transition: 'background-color 0.2s, color 0.2s, text-decoration 0.2s',
    '&:hover': {
      backgroundColor: programmingClassColor,
      color: 'white',
      textDecoration: 'none'
    }
  }
})

export const researchClass = css({
  '&.nav-link,&.item-header': {
    backgroundColor: researchClassColor,
    color: 'white',
    transition: 'background-color 0.5s, color 0.5s',
  },
  '&.speech-link': {
    textDecoration: 'underline wavy ' + researchClassColor,
    textDecorationThickness: '5%',
    transition: 'background-color 0.2s, color 0.2s, text-decoration 0.2s',
    '&:hover': {
      backgroundColor: researchClassColor,
      color: 'white',
      textDecoration: 'none',
    }
  }
})

export const etcClass = css({
  '&.nav-link,&.item-header': {
    backgroundColor: etcClassColor,
    color: 'white',
    transition: 'background-color 0.5s, color 0.5s',
  },
  '&.speech-link': {
    textDecoration: 'underline wavy ' + etcClassColor,
    textDecorationThickness: '5%',
    transition: 'background-color 0.2s, color 0.2s, text-decoration 0.2s',
    '&:hover': {
      backgroundColor: etcClassColor,
      color: 'white',
      textDecoration: 'none',
    }
  }
})
