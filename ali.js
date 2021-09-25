/** MIKIR DEWE COK by SH **/

var permalink = window.location.pathname;
if (permalink.includes('/item/')) {
	var rawid = permalink.match('item\/(.*)\.html')[0];
	var idne = rawid.replace('item/', '');
	var aff = 'https://gobuy.cyou/go.php?http://s.click.aliexpress.com/deep_link.htm?dl_target_url=https://www.aliexpress.com/item/-/ikigantinenbosqu&aff_short_key=_9iRZpY';
	var lempar = aff.replace('ikigantinenbosqu', idne);

	if (['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
		window.location.href = lempar
	}
} else {
	if (['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
		window.location.href = 'https://gobuy.cyou/go.php?https://s.click.aliexpress.com/e/_A0OHom'
	}
}
