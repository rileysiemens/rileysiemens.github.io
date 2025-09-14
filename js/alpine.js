import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import md5 from 'md5'

window.Alpine = Alpine
Alpine.plugin([focus, intersect])

document.addEventListener('alpine:init', () => {
	Alpine.data('homepage', () => ({
		baseUrl: 'https://ik.imagekit.io/rileys/',
		photos: [],
		enlargedPhoto: null,

		get email() {
			let first = 'hi'
			let last = 'rileysiemens'
			return `${first}@${last}.com`
		},

		get gravatarUrl() {
			return `https://www.gravatar.com/avatar/${md5(this.email)}`
		},

		init: function () {
			let url = `${this.baseUrl}tr:w-350,h-350,pr-true/`
			this.photos.push(`${url}not-a-pipe.JPEG`)

			let ids = [
				6290, 5133, 5122, 5109, 5006, 5005, 5004, 5002, 4988, 4961, 4945, 4925, 4917, 4859, 4740, 4726, 4722,
				4714, 4707, 4691, 4687, 4684, 4527, 4257, 3709, 3399, 2387, 1853, 4721
			]
			ids.forEach((id) => this.photos.push(`${url}IMG_${id}.JPEG`))
			this.photos.sort()
		},

		contactMe: function () {
			let link = document.createElement('a')
			link.href = `mailto:${this.email}`
			link.click()
		},

		enlargePhoto: function (e) {
			let img = e.target

			if (img.src == undefined) {
				img = img.querySelector('img')
			}

			if (!img.src) return

			let imageId = img.src.substring(img.src.lastIndexOf('/') + 1)
			this.enlargedPhoto = this.baseUrl + imageId
		},
	}))
})

Alpine.start()
