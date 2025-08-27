import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import md5 from 'md5'

window.Alpine = Alpine
Alpine.plugin([focus, intersect])

document.addEventListener('alpine:init', () => {
	Alpine.data('homepage', () => ({
		photos: [],
		enlargedPhoto: null,

		init: function () {
			let url = 'https://ik.imagekit.io/rileys/'
			let query = '?tr=w-350,h-350,fo-auto'
			this.photos.push(`${url}not-a-pipe.JPEG${query}`)

			let ids = [
				6290, 5133, 5122, 5109, 5006, 5005, 5004, 5002, 4988, 4961, 4945, 4925, 4917, 4859, 4740, 4726, 4722,
				4714, 4707, 4691, 4687, 4684, 4527, 4257, 3709, 3399, 2387, 1853,
			]
			ids.forEach((id) => this.photos.push(`${url}IMG_${id}.JPEG${query}`))
			this.photos.sort()
		},

		get gravatarUrl() {
			let first = 'contact'
			let last = 'rileysiemens'
			let email = `${first}@${last}.com`
			let hash = md5(email)

			return `https://www.gravatar.com/avatar/${hash}`
		},

		enlargePhoto: function (e) {
			let img = e.target

			if (img.src == undefined) {
				img = img.querySelector('img')
			}

			if (!img.src) return

			this.enlargedPhoto = img.src.split('?')[0]
		},
	}))
})

Alpine.start()
