/* eslint-disable no-unused-vars */
class Images{
	constructor(name, element){
		this.media=element
		this.name=name
		this.picture = `assets/photographers/${this.name}/${this.media.image}`

	}
	// méthode qui renvoie un lien contenant une image
	display(){
		const img= document.createElement('img')
		img.classList.add('media-article__img')
		img.setAttribute('src', this.picture)
		img.setAttribute('alt', this.media.title+', closeup view')
		img.setAttribute('data-id', this.media.id)
		return img
	}

}