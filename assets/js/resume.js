function downloadPDF() {
	const pdfPath = './Documents/SaiSowjanya_Resume_.NET.pdf';
	const a = document.createElement('a');
	a.href = pdfPath;
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
	a.download = 'SaiSowjanya_Resume_.NET.pdf';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

function setFormStatus(message, type) {
	const status = document.getElementById('form-status');
	if (!status) {
		return;
	}

	status.textContent = message;
	status.classList.remove('is-success', 'is-error');
	if (type) {
		status.classList.add(type);
	}
}

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sendEmail(event) {
	if (event) {
		event.preventDefault();
	}

	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');
	const submitBtn = document.getElementById('send-message-btn');

	const name = (nameInput && nameInput.value || '').trim();
	const email = (emailInput && emailInput.value || '').trim();
	const message = (messageInput && messageInput.value || '').trim();

	if (!name || !email || !message) {
		setFormStatus('Please fill in all fields before sending your message.', 'is-error');
		return;
	}

	if (!isValidEmail(email)) {
		setFormStatus('Please enter a valid email address.', 'is-error');
		return;
	}

	if (typeof emailjs === 'undefined') {
		setFormStatus('Email service is unavailable. Please email me directly.', 'is-error');
		return;
	}

	emailjs.init('OmWOt-qyi0oNadP2_');

	const templateParams = {
		from_name: name,
		to_email: email,
		message: message
	};

	if (submitBtn) {
		submitBtn.disabled = true;
		submitBtn.textContent = 'Sending...';
	}

	setFormStatus('Sending your message...', '');

	emailjs.send('service_q1riy1o', 'template_0j6bwch', templateParams)
		.then(function () {
			setFormStatus('Message sent successfully. Thank you!', 'is-success');
			if (nameInput) nameInput.value = '';
			if (emailInput) emailInput.value = '';
			if (messageInput) messageInput.value = '';
		})
		.catch(function () {
			setFormStatus('Unable to send message right now. Please try again or email me directly.', 'is-error');
		})
		.finally(function () {
			if (submitBtn) {
				submitBtn.disabled = false;
				submitBtn.textContent = 'Send Message';
			}
		});
}

document.addEventListener('DOMContentLoaded', function () {
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear());
	}

	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', sendEmail);
	}

	const sections = document.querySelectorAll('#main > section[id]');
	const navLinks = document.querySelectorAll('#site-nav a');

	if ('IntersectionObserver' in window && sections.length && navLinks.length) {
		const observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) {
					return;
				}

				const id = entry.target.getAttribute('id');
				navLinks.forEach(function (link) {
					const isActive = link.getAttribute('href') === '#' + id;
					link.classList.toggle('is-active', isActive);
				});
			});
		}, {
			rootMargin: '-40% 0px -50% 0px',
			threshold: 0.01
		});

		sections.forEach(function (section) {
			observer.observe(section);
		});
	}
});
