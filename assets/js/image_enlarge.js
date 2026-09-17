document.addEventListener('DOMContentLoaded', function () {
	const avatarLink = document.getElementById('avatar-link');
	const overlay = document.getElementById('overlay');
	const closeBtn = document.getElementById('overlay-close');

	if (!avatarLink || !overlay) {
		return;
	}

	function openOverlay(event) {
		if (event) {
			event.preventDefault();
		}
		overlay.hidden = false;
		overlay.classList.add('is-open');
		overlay.style.display = 'flex';
		document.body.style.overflow = 'hidden';
		if (closeBtn) {
			closeBtn.focus();
		}
	}

	function closeOverlay() {
		overlay.hidden = true;
		overlay.classList.remove('is-open');
		overlay.style.display = 'none';
		document.body.style.overflow = '';
		avatarLink.focus();
	}

	avatarLink.addEventListener('click', openOverlay);

	if (closeBtn) {
		closeBtn.addEventListener('click', function (event) {
			event.stopPropagation();
			closeOverlay();
		});
	}

	overlay.addEventListener('click', function (event) {
		if (event.target === overlay) {
			closeOverlay();
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
			closeOverlay();
		}
	});
});
