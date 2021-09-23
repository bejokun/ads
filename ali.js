function gasken() {
	var permalink = window.location.pathname;
	if (permalink.includes("/item/")) {
		var rawid = permalink.match("item\/(.*)\.html")[0];
		var idne = rawid.replace("item/", "");
		var aff = "http://s.click.aliexpress.com/deep_link.htm?dl_target_url=https://www.aliexpress.com/item/-/ikigantinenbosqu&aff_short_key=_AKzWuz";
		var lempar = aff.replace("ikigantinenbosqu", idne);

		if (['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
			window.location.href = lempar
		}
	} else {
		if (['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) {
			window.location.href = "https://s.click.aliexpress.com/e/_A0OHom"
		}
	}
}
