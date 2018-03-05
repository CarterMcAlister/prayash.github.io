import forEach from 'lodash/forEach'

const preload = imageCollection => {
  forEach(imageCollection, src => {
    let image = new Image()

    image.src = src
  })
}

export const imageFills = {
  about: require('../assets/img/about.png'),
  blog: require('../assets/img/blog.jpg'),
  music: require('../assets/img/music.jpg'),
  work: require('../assets/img/work.jpg')
}

preload(imageFills)
