$.jribbble.setToken('4ab2348fce143f6ce16df9deb275f642b3754d105f44d50717c5f93be3fa7d39');

$.jribbble.users('DVaccaro').shots({per_page: 8}).then(function(shots) {
	var html = [];
	shots.forEach(function(shot) {
		// See the Dribbble docs for all available shot properties.
		html.push('<a href="' + shot.html_url + '">');
		html.push(`<div class="shots--shot" style="background-image: url('${shot.images.normal}');">`);	
		html.push('</div></a>');
	});
	$('.shots').html(html.join(''));
});

