function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector("html").classList.add("ie");
}
if (isMobile.any()) {
	document.querySelector("html").classList.add("_touch");
}

// Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector("html").classList.add("_webp");
	} else {
		document.querySelector("html").classList.add("_no-webp");
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector("img") && ibg[i].querySelector("img").getAttribute("src") != null) {
				ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
			}
		}
	}
}
ibg();

window.addEventListener("load", function () {
	if (document.querySelector(".wrapper")) {
		setTimeout(function () {
			document.querySelector(".wrapper").classList.add("_loaded");
		}, 1000);
	}
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace("#", "");
	if (document.querySelector(".popup_" + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector("div." + hsh)) {
		_goto(document.querySelector("." + hsh), 500, "");
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
}
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains("_lock")) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = "0px";
			}
			body.style.paddingRight = "0px";
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
		}
		body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//Tabs
let tabs = document.querySelectorAll("._tabs");

for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	let helpHeaderColors = document.querySelectorAll(".header-help ._linear");

	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove("_active");
				tabs_blocks[index].classList.remove("_active");
			}
			tabs_item.classList.add("_active");
			tabs_blocks[index].classList.add("_active");

			for (let index = 0; index < helpHeaderColors.length; index++) {
				let helpHeaderColor = helpHeaderColors[index];

				if (tabs_item.classList.contains("_blue")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[0].classList.add("_active");
				} else if (tabs_item.classList.contains("_purple")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[1].classList.add("_active");
				} else if (tabs_item.classList.contains("_yellow")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[2].classList.add("_active");
				} else if (tabs_item.classList.contains("_green")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[3].classList.add("_active");
				} else if (tabs_item.classList.contains("_beige")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[4].classList.add("_active");
				} else if (tabs_item.classList.contains("_gray")) {
					helpHeaderColor.classList.remove("_active");
					helpHeaderColors[5].classList.add("_active");
				}
			}
			e.preventDefault();
		});
	}
}
//=================
//Popups
let popup_link = document.querySelectorAll("._popup-link");
let popups = document.querySelectorAll(".popup");
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener("click", function (e) {
		if (unlock) {
			let item = el.getAttribute("href").replace("#", "");
			let video = el.getAttribute("data-video");
			popup_open(item, video);
		}
		e.preventDefault();
	});
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest(".popup__body")) {
			popup_close(e.target.closest(".popup"));
		}
	});
}
function popup_open(item, video = "") {
	let activePopup = document.querySelectorAll(".popup._active");
	if (activePopup.length > 0) {
		popup_close("", false);
	}
	let curent_popup = document.querySelector(".popup_" + item);
	if (curent_popup && unlock) {
		if (video != "" && video != null) {
			let popup_video = document.querySelector(".popup_video");
			popup_video.querySelector(".popup__video").innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector(".menu__body._active")) {
			body_lock_add(500);
		}
		curent_popup.classList.add("_active");
		history.pushState("", "", "#" + item);
	}
}
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let index = 0; index < popups.length; index++) {
				const popup = popups[index];
				let video = popup.querySelector(".popup__video");
				if (video) {
					video.innerHTML = "";
				}
				popup.classList.remove("_active");
			}
		} else {
			let video = item.querySelector(".popup__video");
			if (video) {
				video.innerHTML = "";
			}
			item.classList.remove("_active");
		}
		if (!document.querySelector(".menu__body._active") && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState("", "", window.location.href.split("#")[0]);
	}
}
let popup_close_icon = document.querySelectorAll(".popup__close,._popup-close,.popup_complete-message");
if (popup_close_icon) {
	for (let index = 0; index < popup_close_icon.length; index++) {
		const el = popup_close_icon[index];
		el.addEventListener("click", function () {
			popup_close(el.closest(".popup"));
		});
	}
}
document.addEventListener("keydown", function (e) {
	if (e.code === "Escape") {
		popup_close();
	}
});

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide");
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = target.offsetHeight + "px";
		target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty("height");
			target.style.removeProperty("padding-top");
			target.style.removeProperty("padding-bottom");
			target.style.removeProperty("margin-top");
			target.style.removeProperty("margin-bottom");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("_slide");
		}, duration);
	}
};
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide");
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = "hidden";
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + "px";
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		window.setTimeout(() => {
			target.style.removeProperty("height");
			target.style.removeProperty("overflow");
			target.style.removeProperty("transition-duration");
			target.style.removeProperty("transition-property");
			target.classList.remove("_slide");
		}, duration);
	}
};
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
};
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return el.offsetParent === null;
}

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
	}
})();

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderMain = new Swiper(".slider-main", {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1300,
	simulateTouch: true,
	loop: true,
	preloadImages: false,
	lazy: true,
  parallax: true,
	// Dotts
	pagination: {
		el: ".pagination-main",
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: ".controls-main .controls-main__button_next",
		prevEl: ".controls-main .controls-main__button_prev",
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

function sliders_bild_callback(params) { }

let sliderDA = new Swiper(".da", {
  effect: 'fade',
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1300,
	simulateTouch: true,
	loop: true,
	preloadImages: false,
	lazy: true,
  parallax: true,
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

sliderMain.controller.control = sliderDA;
sliderDA.controller.control = sliderMain;
//Sub-Menu
let iconSubMenu = document.querySelectorAll(".burger-sub-menu,.sub-menu__mob-title");
if (iconSubMenu != null) {
	let subMenu = document.querySelector(".sub-menu");
	let menu = document.querySelector(".menu");
	for (let index = 0; index < iconSubMenu.length; index++) {
		const el = iconSubMenu[index];
		el.addEventListener("click", function (e) {
			el.classList.toggle("_active");
			subMenu.classList.toggle("_active");
			menu.classList.toggle("_active");
		});
	}
}
//=================
let fileInput = document.querySelectorAll(".form__file");
Array.prototype.forEach.call(fileInput, function (input) {
	let label = input.nextElementSibling;

	input.addEventListener("change", function (e) {
		let countFiles = "";
		if (this.files && this.files.length >= 1) countFiles = this.files.length;

		if (countFiles) label.innerText = "Выбрано файлов: " + countFiles;
		label.classList.add("_attached");
	});
});
//=================
// ({
// 	plugins: ["jsdom-quokka-plugin"],
// });

//=================
const sliderPopups = document.querySelectorAll("._popup-link");
for (let index = 0; index < sliderPopups.length; index++) {
  const el = sliderPopups[index];
  
	el.addEventListener("click", function (e) {
    let item = el.getAttribute("href").replace("#", "");
		popup_open(item);
	});
}
//=================
let langSelect = document.querySelectorAll(".lang");
if (langSelect != null) {
	for (let index = 0; index < langSelect.length; index++) {
		const el = langSelect[index];
		el.addEventListener("click", function (e) {
			el.classList.toggle("_active");
		});
	}
}
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll("form");
if (forms.length > 0) {
	for (let index = 0; index < forms.length; index++) {
		const el = forms[index];
		el.addEventListener("submit", form_submit);
	}
}
async function form_submit(e) {
	let btn = e.target;
	let form = btn.closest("form");
	let error = form_validate(form);
	if (error == 0) {
		let formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
		let formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
		const message = form.getAttribute("data-message");
		const ajax = form.getAttribute("data-ajax");

		//SendForm
		if (ajax) {
			e.preventDefault();
			let formData = new FormData(form);
			form.classList.add("_sending");
			let response = await fetch(formAction, {
				method: formMethod,
				body: formData,
			});
			if (response.ok) {
				let result = await response.json();
				form.classList.remove("_sending");
				if (message) {
					popup_open(message + "-message");
				}
				form_clean(form);
			} else {
				alert("Ошибка");
				form.classList.remove("_sending");
			}
		}
		// If test
		if (form.hasAttribute("data-test")) {
			e.preventDefault();
			if (message) {
				popup_open(message + "-message");
			}
			form_clean(form);
		}
	} else {
		let form_error = form.querySelectorAll("._error");
		if (form_error && form.classList.contains("_goto-error")) {
			_goto(form_error[0], 1000, 50);
		}
		e.preventDefault();
	}
}
function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll("._req");
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute("data-value");

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == "" || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add("_error");
	input.parentElement.classList.add("_error");

	let input_error = input.parentElement.querySelector(".form__error");
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_remove_error(input) {
	input.classList.remove("_error");
	input.parentElement.classList.remove("_error");
}
function form_clean(form) {
	let inputs = form.querySelectorAll("input,textarea");
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove("_focus");
		el.classList.remove("_focus");
		el.value = el.getAttribute("data-value");
	}
	let checkboxes = form.querySelectorAll(".checkbox__input");
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll("select");
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute("data-default");
			select.value = select_default_value;
			select_item(select);
		}
	}
}

//Select
let selects = document.getElementsByTagName("select");
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener("click", function (e) {
		selects_close(e);
	});
	document.addEventListener("keydown", function (e) {
		if (e.code === "Escape") {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll(".select");
	if (!e.target.closest(".select") && !e.target.classList.contains("_option")) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector(".select__options");
			select.classList.remove("_active");
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute("class");
	const select_selected_option = select.querySelector("option:checked");
	select.setAttribute("data-default", select_selected_option.value);
	select.style.display = "none";

	select_parent.insertAdjacentHTML("beforeend", '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector(".select");
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector(".select__item");
	const select_options = select.querySelectorAll("option");
	const select_selected_option = select.querySelector("option:checked");
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute("data-type");

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = "";
	if (select_type == "input") {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + "</span></div>";
	}

	select_parent.insertAdjacentHTML("beforeend", '<div class="select__item">' + '<div class="select__title">' + select_type_content + "</div>" + '<div hidden class="select__options">' + select_get_options(select_options) + "</div>" + "</div></div>");

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector(".select__item");
	const selectTitle = select.querySelector(".select__title");
	const select_body_options = select.querySelector(".select__options");
	const select_options = select.querySelectorAll(".select__option");
	const select_type = original.getAttribute("data-type");
	const select_input = select.querySelector(".select__input");

	selectTitle.addEventListener("click", function (e) {
		selectItemActions();
	});

	function selectMultiItems() {
		let selectedOptions = select.querySelectorAll(".select__option");
		let originalOptions = original.querySelectorAll("option");
		let selectedOptionsText = [];
		for (let index = 0; index < selectedOptions.length; index++) {
			const selectedOption = selectedOptions[index];
			originalOptions[index].removeAttribute("selected");
			if (selectedOption.classList.contains("_selected")) {
				const selectOptionText = selectedOption.innerHTML;
				selectedOptionsText.push(selectOptionText);
				originalOptions[index].setAttribute("selected", "selected");
			}
		}
		select.querySelector(".select__value").innerHTML = "<span>" + selectedOptionsText + "</span>";
	}
	function selectItemActions(type) {
		if (!type) {
			let selects = document.querySelectorAll(".select");
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index];
				const select_body_options = select.querySelector(".select__options");
				if (select != select_item.closest(".select")) {
					select.classList.remove("_active");
					_slideUp(select_body_options, 300);
				}
			}
			_slideToggle(select_body_options, 300);
			select.classList.toggle("_active");
		}
	}
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute("data-value");
		const select_option_text = select_option.innerHTML;
		const tabs_blocks = document.querySelectorAll("._tabs-block");
		const helpHeaderColors = document.querySelectorAll(".header-help ._linear");

		if (select_type == "input") {
			select_input.addEventListener("keyup", select_search);
		} else {
			if (select_option.getAttribute("data-value") == original.value && !original.hasAttribute("multiple")) {
				select_option.style.display = "none";
			}
		}

		select_option.addEventListener("click", function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = "block";
				if (tabs_blocks.length > 1) {
          tabs_blocks[index].classList.remove("_active");
        }

				for (let index = 0; index < helpHeaderColors.length; index++) {
					let helpHeaderColor = helpHeaderColors[index];
					if (select_option_value == "1" || select_option_value == "12") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[0].classList.add("_active");
					} else if (select_option_value == "2" || select_option_value == "10") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[1].classList.add("_active");
					} else if (select_option_value == "3" || select_option_value == "11") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[2].classList.add("_active");
					} else if (select_option_value == "4" || select_option_value == "8") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[3].classList.add("_active");
					} else if (select_option_value == "5" || select_option_value == "9") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[4].classList.add("_active");
					} else if (select_option_value == "6" || select_option_value == "7") {
						helpHeaderColor.classList.remove("_active");
						helpHeaderColors[5].classList.add("_active");
					}
				}
			}
			if (tabs_blocks.length > 1) {
        tabs_blocks[index].classList.add("_active");
      }

			if (select_type == "input") {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				if (original.hasAttribute("multiple")) {
					select_option.classList.toggle("_selected");
					selectMultiItems();
				} else {
					select.querySelector(".select__value").innerHTML = "<span>" + select_option_text + "</span>";
					original.value = select_option_value;
					select_option.style.display = "none";
				}
			}
			let type;
			if (original.hasAttribute("multiple")) {
				type = "multiple";
			}
			selectItemActions(type);
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = "";
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != "") {
				const select_option_text = select_option.innerHTML;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + "</div>";
			}
		}
		return select_options_content;
	}
}
function select_search(e) {
	let select_block = e.target.closest(".select ").querySelector(".select__options");
	let select_options = e.target.closest(".select ").querySelectorAll(".select__option");
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll("select");
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll("input[data-value],textarea[data-value]");
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute("data-value");
			input_placeholder_add(input);
			if (input.value != "" && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener("focus", function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = "";
				}
				if (input.classList.contains("_phone")) {
					input.classList.add("_mask");
					Inputmask("+380 (99) 999 9999", {
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						},
					}).mask(input);
				}
				if (input.classList.contains("_digital")) {
					input.classList.add("_mask");
					Inputmask("9{1,}", {
						placeholder: "",
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						},
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener("blur", function (e) {
				if (input.value == "") {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains("_mask")) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute("data-type") === "pass") {
						input.setAttribute("type", "text");
					}
				}
			});
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute("data-value");
	if (input.value == "" && input_g_value != "") {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add("_focus");
	input.parentElement.classList.add("_focus");
}
function input_focus_remove(input) {
	input.classList.remove("_focus");
	input.parentElement.classList.remove("_focus");
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}

//RANGE
const priceSlider = document.querySelector(".price");
if (priceSlider) {
	let textFrom = priceSlider.getAttribute("data-from");
	let textTo = priceSlider.getAttribute("data-to");

	noUiSlider.create(priceSlider, {
		start: [500, 2000],
		connect: true,
		behaviour: "drag",
		range: {
			min: [500],
			max: [5000],
		},
		step: 500,
	});

	var origins = priceSlider.getElementsByClassName("noUi-origin");
	origins[0].setAttribute("disabled", true);

	var quantity = document.getElementById("quantity");

	priceSlider.noUiSlider.on("update", function (values, handle) {
		var value = values[handle];

		if (handle) {
			quantity.value = Math.round(value);
		}
	});

	quantity.addEventListener("change", function () {
		priceSlider.noUiSlider.set([null, this.value]);
	});

	(function () {
		quantity.addEventListener("keydown", function (e) {
			if (e.keyCode === 13) {
				event.preventDefault();
				quantity.blur();
			}
		});
	})();

	function setPriceValues() {
		let priceStartValue;
		let priceEndValue;
		if (priceStart.value != "") {
			priceStartValue = priceStart.value;
		}
		if (priceEnd.value != "") {
			priceEndValue = priceEnd.value;
		}
		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
	}
}

let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
	let src_value = currentScroll = pageYOffset;
	let header = document.querySelector('header.header');
	if (header !== null) {
		if (src_value > 10) {
			header.classList.add('_scroll');
		} else {
			header.classList.remove('_scroll');
		}
	}
	if (scr_blocks.length > 0) {
		for (let index = 0; index < scr_blocks.length; index++) {
			let block = scr_blocks[index];
			let block_offset = offset(block).top;
			let block_height = block.offsetHeight;

			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				block.classList.add('_scr-sector_active');
			} else {
				if (block.classList.contains('_scr-sector_active')) {
					block.classList.remove('_scr-sector_active');
				}
			}
			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
				if (!block.classList.contains('_scr-sector_current')) {
					block.classList.add('_scr-sector_current');
				}
			} else {
				if (block.classList.contains('_scr-sector_current')) {
					block.classList.remove('_scr-sector_current');
				}
			}
		}
	}
	if (scr_items.length > 0 && window.screen.width > 479.98) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;

			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}

			if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
				scr_item.classList.add("_active");
				scroll_load_item(scr_item);
			} else {
				// scr_item.classList.remove('_active');
			}
			if (src_value > scr_item_offset - window.innerHeight) {
				if (scr_item.querySelectorAll("._lazy").length > 0) {
					scroll_lazy(scr_item);
				}
			}
		}
	}
	if (scr_fix_block.length > 0) {
		fix_block(scr_fix_block, src_value);
	}
	let custom_scroll_line = document.querySelector('._custom-scroll__line');
	if (custom_scroll_line) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
	}
	scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);


function scroll_load_item(scr_item) {
	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
		let map_item = document.getElementById('map');
		if (map_item) {
			scr_item.classList.add('_loaded-map');
			map();
		}
	}
}

//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
	for (let index = 0; index < goto_links.length; index++) {
		let goto_link = goto_links[index];
		goto_link.addEventListener('click', function (e) {
			let target_block_class = goto_link.getAttribute('href').replace('#', '');
			let target_block = document.querySelector('.' + target_block_class);
			_goto(target_block, 700);
			e.preventDefault();
		});
	}
}
function _goto(target_block, speed, offset = 0) {
	let header = '';
	//OffsetHeader
	//if (window.innerWidth < 992) {
	//	header = 'header';
	//}
	let options = {
		speedAsDuration: true,
		speed: speed,
		header: header,
		offset: offset,
		easing: 'easeOutQuad',
	};
	let scr = new SmoothScroll();
	scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
}
function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}


function fix_block(scr_fix_block, scr_value) {
  if (window.innerWidth > 991.98) {
    let window_width = parseInt(window.innerWidth);
    let window_height = parseInt(window.innerHeight);
    let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
    for (let index = 0; index < scr_fix_block.length; index++) {
      const block = scr_fix_block[index];
      let block_width = block.getAttribute('data-width');
      const item = block.querySelector('._side-block');
      if (!block_width) { block_width = 0; }
      if (window_width > block_width) {
        if (item.offsetHeight < window_height - (header_height + 30)) {
          if (scr_value > offset(block).top - (header_height + 15)) {
            item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
          } else {
            gotoRelative(item);
          }
          if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
            block.style.cssText = "position:relative;";
            item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
          }
        } else {
          gotoRelative(item);
        }
      }
    }
    function gotoRelative(item) {
      item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
    }
  }
}


let new_pos = pageYOffset;
function scroll_animate(event) {
	let window_height = window.innerHeight;
	let content_height = document.querySelector('.wrapper').offsetHeight;
	let start_position = pageYOffset;
	let pos_add = 100;

	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
		new_pos = new_pos - pos_add;
	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
		new_pos = new_pos + pos_add;
	}
	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
	if (new_pos < 0) new_pos = 0;

	if (scrolling) {
		scrolling = false;
		_goto(new_pos, 1000);

		let scr_pause = 100;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = scr_pause * 2;
		};
		setTimeout(function () {
			scrolling = true;
			_goto(new_pos, 1000);
		}, scr_pause);
	}
	//If native scroll
	//disableScroll();
}
